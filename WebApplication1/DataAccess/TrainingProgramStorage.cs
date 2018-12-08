using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using bangazon.Models;
using Dapper;

namespace bangazon.DataAccess
{
    public class TrainingProgramStorage
    {
        private readonly string ConnectionString;

        public TrainingProgramStorage(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }

        public IEnumerable<TrainingProgram> GetAllTrainingPrograms()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<TrainingProgram>(
                    @"SELECT *, EmployeeName = employee.name
                    FROM training_programs 
                    LEFT JOIN employee_training_program_pair ON employee_training_program_pair.training_program_id = training_programs.id
	                    LEFT JOIN employee ON employee.id = employee_training_program_pair.employee_id");
                return result;
            }
        }

        public IEnumerable<TrainingProgram> GetAllTrainingProgramsTodayOrFuture()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<TrainingProgram>(
                    @"SELECT *, EmployeeName = employee.name 
                    FROM training_programs 
                    LEFT JOIN employee_training_program_pair ON employee_training_program_pair.training_program_id = training_programs.id
	                    LEFT JOIN employee ON employee.id = employee_training_program_pair.employee_id
                    WHERE start_date >= getDate()");
                return result;
            }
        }

        public IEnumerable<TrainingProgram> GetSingleTrainingProgram(int id)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<TrainingProgram>(
                    @"SELECT *, EmployeeName = employee.name 
                    FROM training_programs
                    LEFT JOIN employee_training_program_pair ON employee_training_program_pair.training_program_id = training_programs.id
	                    LEFT JOIN employee ON employee.id = employee_training_program_pair.employee_id
                    WHERE training_programs.id = @id", new { id }    
                );
                return result;
            }
        }

        public IEnumerable<TrainingProgram> GetSingleTrainingProgramTodayOrFuture(int id)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<TrainingProgram>(
                    @"SELECT *, EmployeeName = employee.name 
                    FROM training_programs
                    LEFT JOIN employee_training_program_pair ON employee_training_program_pair.training_program_id = training_programs.id
	                    LEFT JOIN employee ON employee.id = employee_training_program_pair.employee_id
                    WHERE training_programs.id = @id AND start_date >= getDate()", new { id }
                );
                return result;
            }
        }

        public bool AddNewTrainingProgram(TrainingProgram trainingProgram)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Execute(
                        @"INSERT into [dbo].[training_programs]([start_date], [end_date], [max_attendees])
                        VALUES (@start_date, @end_date, @max_attendees)", trainingProgram
                );
                return result == 1;
            }
        }

        public bool DeleteTrainingProgram(int id)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Execute(@"
                    DELETE FROM [dbo].training_programs 
                    WHERE id = @id AND start_date >= getDate()", 
                    new { id } );
                return result == 1;
            }
        }

        public bool UpdateTrainingProgram(int id, TrainingProgram trainingProgram)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Execute(
                    @"UPDATE [dbo].[training_programs]
                    SET [start_date] = @start_date, [end_date] = @end_date, [max_attendees] = @max_attendees
                    WHERE id = @id",
                    new {
                        trainingProgram.Start_Date,
                        trainingProgram.End_Date,
                        trainingProgram.Max_Attendees,
                        id
                    }
                );
                return result == 1;
            }
        }

        public IEnumerable<Employee> GetTPEmployees(int id)
        {
          using (var connection = new SqlConnection(ConnectionString))
          {
            connection.Open();
            var result = connection.Query<Employee>(
              @"select e.is_supervisor, e.department_id as department_id ,e.name as employee_name, e.id from employee as e
	            left join employee_training_program_pair as et on e.id = et.employee_id
	            join training_programs as t on t.id = et.training_program_id
	            and t.id = @id", new { id = id }
              );
            return result;
          }
        }
    }
}

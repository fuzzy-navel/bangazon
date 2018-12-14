using bangazon.Models;
using System.Collections.Generic;
using Dapper;
using System.Data.SqlClient;
using System;
using System.Linq;
using System.Data;

namespace bangazon.Controllers
{
    public class ComputerStorage
    {
        private const string ConnectionString = "Server = (local); Database=Bangazon; Trusted_Connection=True";


        //localhost:44398/api/Computer

        public IEnumerable<Computer> GetAllComputers()
        {
            using(var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<Computer>(@"select * from computer");

                return result;
            }
        }

        //localhost:44398/api/Computer/4

        public IEnumerable<Computer> GetComputerById(int id)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<Computer>(@"select * from computer c Where c.id = @id", new { id = @id });

                return result;
            }
        }

        //localhost:44398/api/Computer/3
        // --If its marked 'in use', then it cannot be assigned to a new employee
        // --if its marked 'in use = 0', then it cannot be assigned to an employee
        // 1 computer per employee
        // --purchase data has to be before decomm. date
        // make model of computers(change in DB)
        public bool UpdateComputer(int id, Computer computer)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                
                var result4 = connection.Execute(@"Update computer
                                                SET purchase_date = @purchase_date, decommissioned = @decommissioned, employee_id = @employee_id, in_use = @in_use, is_malfunctioning = @is_malfunctioning
                                                Where id = @id",
                                                new
                                                {
                                                    id,
                                                    computer.purchase_date,
                                                    computer.decommissioned,
                                                    computer.employee_id,
                                                    computer.in_use,
                                                    computer.is_malfunctioning
                                                });


                return result4 == 1;
            }

        }


        public bool AddComputer(Computer computer)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var validateInput = true;
                var preUpdateComputer = connection.Query<Computer>(@"select * from computer");

                // purchase date must be older than decommissioned date
                if (computer.purchase_date > computer.decommissioned)
                {
                    validateInput = false;
                }

                // if a computer is in use, it must have an employee id
                if (computer.in_use && computer.employee_id == 0)
                {
                    validateInput = false;
                }

                // if a computer has an employee id, in_use must be true
                if (computer.employee_id > 0 && computer.in_use == false)
                {
                    validateInput = false;
                }

                for (var i = 0; i < preUpdateComputer.Count(); i++)
                {
                    // employees can only have one computer
                    if (preUpdateComputer.ElementAt(i).employee_id == computer.employee_id)
                    {
                        validateInput = false;
                    }
                }

                if (validateInput)
                {
                    var result3 = connection.Execute(
                        @"INSERT into [dbo].[computer]
                        ([purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning], [make], [model])
                        VALUES (@purchase_date, @decommissioned, @employee_id, @in_use, @is_malfunctioning, @make, @model)", computer);

                    return result3 == 1;
                } else
                {
                    return false;
                }
            } 
        }
      
      
        public bool DeleteComputer(int id)
        {
          using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
            
                var result5 = connection.Execute(@"DELETE from [dbo]. computer Where id = @id", new { id });

                return result5 == 1;

            }
        }
    }
}
using bangazon.Models;
using System.Collections.Generic;
using Dapper;
using System.Data.SqlClient;
using System;

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

                var result3 = connection.Execute(@"Insert into [dbo].[computer]([purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning])
                                                 VALUES (@purchase_date, @decommissioned, @employee_id, @in_use, @is_malfunctioning)", computer);

                return result3 == 1;
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
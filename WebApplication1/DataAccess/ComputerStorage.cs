using bangazon.Models;
using bangazonFront.Validators;
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

        public ComputerValidator _checks;

        public ComputerStorage()
        {
            _checks = new ComputerValidator();
        }

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
                // validates input computer before updating it
                var checkComputerResults = _checks.CheckComputer(computer, "put");

                if (checkComputerResults)
                {
                    var result4 = connection.Execute(
                        @"UPDATE computer
                        SET purchase_date = @purchase_date, decommissioned = @decommissioned, employee_id = @employee_id, in_use = @in_use, is_malfunctioning = @is_malfunctioning, make = @make, model = @model
                        WHERE id = @id",
                        new
                        {
                            id,
                            computer.purchase_date,
                            computer.decommissioned,
                            computer.employee_id,
                            computer.in_use,
                            computer.is_malfunctioning,
                            computer.make,
                            computer.model
                        });

                    return result4 == 1;

                }
                else
                {
                    return false;
                }

            }

        }


        public bool AddComputer(Computer computer)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                // validates input computer before adding it
                var checkComputerResults = _checks.CheckComputer(computer, "post");

                if (checkComputerResults)
                {
                    var result3 = connection.Execute(
                        @"INSERT into [dbo].[computer]
                        ([purchase_date], [decommissioned], [employee_id], [in_use], [is_malfunctioning], [make], [model])
                        VALUES (@purchase_date, @decommissioned, @employee_id, @in_use, @is_malfunctioning, @make, @model)",
                        computer);
                    return result3 == 1;
                }
                else
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
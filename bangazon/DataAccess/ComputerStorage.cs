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



        public IEnumerable<Computer> GetAllComputers()
        {
            using(var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<Computer>(@"select * from computer");

                return result;
            }
        }


        public IEnumerable<Computer> GetComputerById(int id)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<Computer>(@"select * from computer c Where c.id = @id", new { id = @id });

                return result;
            }
        }

        public bool UpdateComputer(int id, Computer computer)
        {
            using(var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result4 = connection.Execute(@"Update computer
                                                SET purchase_date = @purchase_date, decommissioned = @decommissioned, employee_id = @employee_id, in_use = @in_use, is_malfunctioning = @is_malfunctioning
                                                Where id = @id",    
                                                new
                                                { id,
                                                    computer.purchase_date,
                                                    computer.decommissioned,
                                                    computer.employee_id,
                                                    computer.in_use,
                                                    computer.is_malfunctioning});


                return result4 == 1;
            }
        }
    }
}
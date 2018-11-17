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

        public bool AddComputer(Computer computer)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result3 = connection.Execute(@"Insert into [dbo].[computer]([id], [purchased_date], [decomissioned], [employee_id], [in_use], [is_malfunctioning])
                                                 VALUES (@id, @purchased_date, @decomissioned, @employee_id, @in_use, @is_malfunctioning)", computer);

                return result3 == 1;
            }
        }
    }
}
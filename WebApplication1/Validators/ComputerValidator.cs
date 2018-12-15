using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Collections.Generic;
using bangazon.Models;
using Dapper;

namespace bangazonFront.Validators
{
    public class ComputerValidator
    {
        private const string ConnectionString = "Server = (local); Database=Bangazon; Trusted_Connection=True";
        
        public bool CheckComputer(Computer computerToAdd)
        {
            using (var connection = new SqlConnection(ConnectionString))
                {
                    connection.Open();
                    var validateInput = true;
                    var preUpdateComputer = connection.Query<Computer>(@"select * from computer");

                    // purchase date must be older than decommissioned date
                    if (computerToAdd.purchase_date > computerToAdd.decommissioned)
                    {
                        validateInput = false;
                    }

                    // if a computer is in use, it must have an employee id
                    if (computerToAdd.in_use && computerToAdd.employee_id == 0)
                    {
                        validateInput = false;
                    }

                    // if a computer has an employee id, in_use must be true
                    if (computerToAdd.employee_id > 0 && computerToAdd.in_use == false)
                    {
                        validateInput = false;
                    }

                    for (var i = 0; i<preUpdateComputer.Count(); i++)
                    {
                        // employees can only have one computer
                        if (preUpdateComputer.ElementAt(i).employee_id == computerToAdd.employee_id)
                        {
                            validateInput = false;
                        }
                    }
                return validateInput;
            }
        }
    }
}

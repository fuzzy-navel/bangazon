using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

using bangazon.Models;
using Dapper;

namespace bangazonFront.Validators
{
    public class ComputerValidator
    {
        private const string ConnectionString = "Server = (local); Database=Bangazon; Trusted_Connection=True";

        public bool CheckComputer(Computer computerToAdd, string httpMethodType)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var validateInput = true;
                var employeeHasComputer = connection.ExecuteScalar<int>
                    (@"select count(*) from computer where employee_id = @employee_id", new { computerToAdd.employee_id });

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

                // employees can only have one computer
                //   different checks based on `post` or `put` methods
                if (employeeHasComputer > 0 && httpMethodType == "post")
                {
                    validateInput = false;
                }
                else if (employeeHasComputer > 1 && httpMethodType == "put")
                {
                    validateInput = false;
                }

                return validateInput;
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Collections.Generic;
using bangazon.Models;

namespace bangazonFront.Validators
{
    public class ComputerValidator
    {
        private const string ConnectionString = "Server = (local); Database=Bangazon; Trusted_Connection=True";
        
        public void CheckComputer()
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

                    for (var i = 0; i<preUpdateComputer.Count(); i++)
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

        
    }
}

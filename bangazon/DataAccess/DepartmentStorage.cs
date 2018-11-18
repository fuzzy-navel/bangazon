using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using bangazon.Models;
using System.Data.SqlClient;
using bangazon.DataAccess;

namespace bangazon.DataAccess
{
    public class DepartmentStorage
    {
        private const string ConnectionInfo = "Server = (local); Database=Bangazon; Trusted_Connection=True";

        public IEnumerable<Department> GetAllDepartments()
        {
            using (var db = new SqlConnection(ConnectionInfo))
            {
                db.Open();

                var result = db.Query<Department>(@"SELECT * FROM [dbo].department");

                return result;

                //List<Department> AllDepartments = new List<Department>();

                //var command = db.CreateCommand();
                //command.CommandText = @"SELECT *
                //                        FROM [dbo].department";

                //var reader = command.ExecuteReader();

                //int supervisorId;
                //while (reader.Read())
                //{
                //    if(DBNull.Value.Equals(reader["supervisor_id"]))
                //    {
                //        supervisorId = 0;
                //    } else
                //    {
                //        supervisorId = (int)reader["supervisor_id"];
                //    }
                //    var currentDepartment = new Department()
                //    {
                //        Name = reader["name"].ToString(),
                //        Budget = (int)reader["expense_budget"],
                //        SupervisorId = supervisorId,
                //        Id = (int)reader["id"]
                //    };

                //    AllDepartments.Add(currentDepartment);
                //}

                //return AllDepartments;
            }
        }

        //        public List<DepartmentAndEmployees> GetDepartmentsWithEmployees()
        //        {
        //            List<DepartmentAndEmployees> departmentsAndEmployees = new List<DepartmentAndEmployees>();
        //            List<Employee> employees = new List<Employee>();

        //            using (var db = new SqlConnection(ConnectionInfo))
        //            {
        //                db.Open();

        //                var command = db.CreateCommand();
        //                command.CommandText = @"SELECT *
        //                                        FROM [dbo].department";
        //                var reader = command.ExecuteReader();

        //                int supervisorId;

        //                while (reader.Read())
        //                {
        //                    if (DBNull.Value.Equals(reader["supervisor_id"]))
        //                    {
        //                        supervisorId = 0;
        //                    }
        //                    else
        //                    {
        //                        supervisorId = (int)reader["supervisor_id"];
        //                    }
        //                    var dAndE = new DepartmentAndEmployees()
        //                    {
        //                        Name = reader["name"].ToString(),
        //                        Budget = (int)reader["expense_budget"],
        //                        SupervisorId = supervisorId,
        //                        Id = (int)reader["id"]
        //                    };

        //                    departmentsAndEmployees.Add(dAndE);
        //                }
        //            }

        //            using (var database = new SqlConnection(ConnectionInfo))
        //                {
        //                    database.Open();

        //                var command = database.CreateCommand();
        //                    command.CommandText = @"SELECT *
        //                                            FROM [dbo].employee";

        //                var reader = command.ExecuteReader();

        //                    while (reader.Read())
        //                    {

        //                        var employee = new Employee()
        //                        {
        //                            employee_name = reader["name"].ToString(),
        //                            is_supervisor = (bool)reader["is_supervisor"],
        //                            department_name = "WIP",
        //                            department_id = (int)reader["department_id"],
        //                            employee_id = (int)reader["id"]
        //                        };

        //                        employees.Add(employee);
        //                    }
        //                }

        //            foreach(DepartmentAndEmployees department in departmentsAndEmployees)
        //            {
        //                department.Employees = new List<Employee>();

        //                foreach (Employee employee in employees)
        //                {
        //                    if(employee.department_id == department.Id)
        //                    {
        //                        department.Employees.Add(employee);
        //                    }
        //                }
        //            }

        //            return departmentsAndEmployees;
        //        }

        public IEnumerable<Department> GetDepartmentById(int id)
        {
            using (var db = new SqlConnection(ConnectionInfo))
            {
                db.Open();

                var result = db.Query<Department>(@"SELECT *
                                        FROM [dbo].department
                                        WHERE id = @Id", new { id });

                return result;

                //var command = db.CreateCommand();
                //command.CommandText = @"SELECT *
                //                        FROM [dbo].department
                //                        WHERE id = @Id";

                //command.Parameters.AddWithValue("@Id", id);

                //var reader = command.ExecuteReader();

                //int supervisorId;
                //var result = new Department();

                //while (reader.Read())
                //{
                //    if (DBNull.Value.Equals(reader["supervisor_id"]))
                //    {
                //        supervisorId = 0;
                //    }
                //    else
                //    {
                //        supervisorId = (int)reader["supervisor_id"];
                //    }

                //    result.Name = reader["name"].ToString();
                //    result.ExpenseBudget = (int)reader["expense_budget"];
                //    result.SupervisorId = supervisorId;
                //    result.Id = (int)reader["id"];
                //}
                //return result;
            }
        }
    }
}

//        public DepartmentAndEmployees GetDepartmentByIdWithEmployees(int id)
//        {
//            var departmentAndEmployees = new DepartmentAndEmployees();
//            departmentAndEmployees.Employees = new List<Employee>();

//            using (var db = new SqlConnection(ConnectionInfo))
//            {
//                db.Open();

//                var command = db.CreateCommand();
//                command.CommandText = @"SELECT *
//                                        FROM [dbo].department
//                                        WHERE id = @Id";

//                command.Parameters.AddWithValue("@Id", id);

//                var reader = command.ExecuteReader();

//                int supervisorId;

//                while (reader.Read())
//                {
//                    if (DBNull.Value.Equals(reader["supervisor_id"]))
//                    {
//                        supervisorId = 0;
//                    }
//                    else
//                    {
//                        supervisorId = (int)reader["supervisor_id"];
//                    }

//                    departmentAndEmployees.Name = reader["name"].ToString();
//                    departmentAndEmployees.Budget = (int)reader["expense_budget"];
//                    departmentAndEmployees.SupervisorId = supervisorId;
//                    departmentAndEmployees.Id = (int)reader["id"];
//                }
//            }
//            using (var database = new SqlConnection(ConnectionInfo))
//            {
//                database.Open();

//                var command = database.CreateCommand();
//                command.CommandText = @"SELECT *
//                                        FROM [dbo].employee
//                                        WHERE department_id = @Id";

//                command.Parameters.AddWithValue("@Id", id);

//                var reader = command.ExecuteReader();

//                while (reader.Read())
//                {

//                    var employee = new Employee()
//                    {
//                        employee_name = reader["name"].ToString(),
//                        is_supervisor = (bool)reader["is_supervisor"],
//                        department_name = "WIP",
//                        department_id = (int)reader["department_id"],
//                        employee_id = (int)reader["id"]
//                    };

//                    departmentAndEmployees.Employees.Add(employee);
//                }
//            }
//            return departmentAndEmployees;
//        }

//        public bool AddADepartment(Department department)
//        {
//            using (var db = new SqlConnection(ConnectionInfo))
//            {
//                db.Open();

//                var result = db.Execute(@"INSERT INTO [dbo].department (name, expense_budget, supervisor_id)
//                                        VALUES(@Name, @Expense_Budget, @Supervisor_Id)", new { Name = department.Name, Expense_Budget = department.ExpenseBudget, Supervisor_Id = department.SupervisorId });

//                return result == 1;

//            }
//        }

//        public bool UpdateADepartment(int id, Department department)
//        {
//            using (var db = new SqlConnection(ConnectionInfo))
//            {
//                db.Open();

//                var result = db.Execute(@"UPDATE [dbo].department
//                                          SET [name] = @Name, [expense_budget] = @Expense_Budget, [supervisor_id] = @Supervisor_Id
//                                          WHERE id = @Id", new { Name = department.Name, Expense_Budget = department.ExpenseBudget, Supervisor_Id = department.SupervisorId, Id = id });

//                return result == 1;
//            }
//        }
//    }
//}

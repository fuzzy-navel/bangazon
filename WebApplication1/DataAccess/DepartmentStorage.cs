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
        private const string ConnectionInfo = "Server = .\\SQLEXPRESS; Database=Bangazon; Trusted_Connection=True";

        public IEnumerable<Department> GetAllDepartments()
        {
            using (var db = new SqlConnection(ConnectionInfo))
            {
                db.Open();

                var result = db.Query<Department>(@"SELECT * FROM [dbo].department");

                return result;
            }
        }

        public List<DepartmentAndEmployees> GetDepartmentsWithEmployees()
        {
            List<Employee> employees = new List<Employee>();

            using (var db = new SqlConnection(ConnectionInfo))
            {
                db.Open();

                var result = db.Query<DepartmentAndEmployees>(@"SELECT * FROM [dbo].department");

                List<DepartmentAndEmployees> departmentsAndEmployees = result.ToList();

                var employeeResult = db.Query<Employee>(@"SELECT name AS employee_name, id AS employee_id, is_supervisor, department_id FROM [dbo].employee");

                employees = employeeResult.ToList();

                foreach (DepartmentAndEmployees department in departmentsAndEmployees)
                {
                    department.Employees = new List<Employee>();

                    foreach (Employee employee in employees)
                    {
                        if (employee.department_id == department.id)
                        {
                            employee.department_name = department.name;
                            department.Employees.Add(employee);
                        }
                    }
                }

                return departmentsAndEmployees;
            }
        }

        public IEnumerable<Department> GetDepartmentById(int id)
        {
            using (var db = new SqlConnection(ConnectionInfo))
            {
                db.Open();

                var result = db.Query<Department>(@"SELECT *
                                        FROM [dbo].department
                                        WHERE id = @Id", new { id });

                return result;
            }
        }

        public IEnumerable<DepartmentAndEmployees> GetDepartmentByIdWithEmployees(int id)
        {
            using (var db = new SqlConnection(ConnectionInfo))
            {
                db.Open();

                var result = db.Query<DepartmentAndEmployees>(@"SELECT * FROM [dbo].department WHERE id = @Id", new { id });
                foreach (var department in result)
                {
                    var employeeResult = db.Query<Employee>(@"SELECT * FROM [dbo].employee WHERE department_id = @Id", new { id });
                    department.Employees = employeeResult.ToList();
                }

                return result;
            }
        }

        public bool AddADepartment(Department department)
        {
            using (var db = new SqlConnection(ConnectionInfo))
            {
                db.Open();

                var result = db.Execute(@"INSERT INTO [dbo].department (name, expense_budget, supervisor_id)
                                        VALUES(@Name, @Expense_Budget, @Supervisor_Id)", new { Name = department.name, Expense_Budget = department.expense_budget, Supervisor_Id = department.supervisor_id });

                return result == 1;

            }
        }

        public bool UpdateADepartment(int id, Department department)
        {
            using (var db = new SqlConnection(ConnectionInfo))
            {
                db.Open();

                var result = db.Execute(@"UPDATE [dbo].department
                                          SET [name] = @Name, [expense_budget] = @Expense_Budget, [supervisor_id] = @Supervisor_Id
                                          WHERE id = @Id", new { Name = department.name, Expense_Budget = department.expense_budget, Supervisor_Id = department.supervisor_id, Id = id });

                return result == 1;
            }
        }

        public bool DeleteDepartment(int id)
        {
            using (var db = new SqlConnection(ConnectionInfo))
            {
                db.Open();

                var result = db.Execute(@"DELETE FROM [dbo].department WHERE id = @Id", new { id });

                return result == 1;
            }
        }
    }
}

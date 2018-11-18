using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bangazon.Models
{
    public class DepartmentAndEmployees
    {
        public string name;
        public int expense_budget;
        public int? supervisor_id;
        public int id;
        public List<Employee> Employees;
    }
}

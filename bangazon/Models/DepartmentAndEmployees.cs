using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bangazon.Models
{
    public class DepartmentAndEmployees
    {
        public string Name;
        public int Budget;
        public int? SupervisorId;
        public int Id;
        public List<Employee> Employees;
    }
}

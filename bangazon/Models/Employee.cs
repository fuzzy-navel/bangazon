using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bangazon.Models
{
  public class Employee
  {
    public string employee_name { get; set;}
    public int employee_id { get; set; }
    public bool is_supervisor { get; set;}
    public string department_name { get; set;}
  }
}

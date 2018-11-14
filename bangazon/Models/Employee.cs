using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bangazon.Models
{
  public class Employee
  {
    public string name { get; set;}
    public bool is_supervisor { get; set;}
    public int department_id { get; set; }
    public int id { get; set; }
  }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace bangazon.Models
{
  public class EmployeeTemplate
  {
    [Required(ErrorMessage = "Please provide a name for the employee.")]
    public string name { get; set; }
    [Required(ErrorMessage = "Please indicate whether or not the employee is a supervisor.")]
    public bool is_supervisor { get; set; }
    [Required(ErrorMessage = "Please provide an id for the employee's department.")]
    public int department_id { get; set;}
  }
}

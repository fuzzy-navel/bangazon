using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace bangazon.Models
{
  public class Customer
  {
    [Required(ErrorMessage = "First name is Required")]
    public string first_name {get; set;}

    public int id {get; set;}

    [Required(ErrorMessage = "Last name is required")]
    public string last_name { get; set; }

    public DateTime date_joined { get; set; }
    public bool active { get; set; }
  }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bangazon.Models
{
  public class CustomerandPayment
  {
    public string first_name;
    public string last_name;
    public DateTime date_joined;
    public bool active;
    public int account_number;
    public int customer_id { get; set;}
    public int payment_id {get; set;}
  }
}

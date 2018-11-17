using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bangazon.Models
{
  public class CustomerandPayment
  {
    public string first_name { get; set; }
    public string last_name { get; set; }
    public DateTime date_joined { get; set; }
    public bool active_customer { get; set; }
    public bool active_payment_type { get; set; }
    public string title { get; set; }
    public int account_number { get; set;}
    public int customer_id { get; set;}
    public int payment_id {get; set;}
  }
}

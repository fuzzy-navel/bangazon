using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bangazon.Models
{
    public class PaymentType
    {
        public int account_number { get; set; }
        //public bool active { get; set; }
        public int customer_id { get; set; }
        //public string title { get; set; }
        public int id { get; } 
    }
}

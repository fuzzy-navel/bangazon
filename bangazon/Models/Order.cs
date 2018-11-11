using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bangazon.Models
{
    public class Order
    {
        public int customer_id;
        public bool order_status;
        public bool can_complete;
        public int payment_type_id;
        public int id;

    }
}

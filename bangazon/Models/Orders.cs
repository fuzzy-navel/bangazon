using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bangazon.Models
{
    public class Orders
    {
        public int id { get; set; }
        public int customer_id { get; set; }
        public bool order_status { get; set; }
        public bool can_complete { get; set; }
        public int payment_type_id { get; set; }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bangazon.Models
{
    public class Order
    {
        public int CustomerId;
        public bool OrderStatus;
        public bool CanComplete;
        public int PaymentTypeId;
        public int Id;

    }
}

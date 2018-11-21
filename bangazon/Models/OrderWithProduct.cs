using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bangazon.Models
{
    public class OrderWithProduct
    {
        public int CustomerId { get; set; }
        public bool OrderStatus { get; set; }
        public bool CanComplete { get; set; }
        public int PaymentTypeId { get; set; }
        public int OrderId { get; set; }
        public List<string> ProductTitle { get; set; } = new List<string>();
    }
}

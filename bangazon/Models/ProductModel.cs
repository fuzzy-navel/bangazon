using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bangazon.Models
{
    public class Product
    {
        public int Category { get; set; }
        public decimal Price { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Quantity { get; set; }
        public int Owner_Id { get; set; }
        public int Id { get; set; }
    }
}

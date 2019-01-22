using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bangazon.Models
{
    public class ProductType
    {
        public string category { get; set; }
        public int? id { get; set; }
        public int? prodId { get; set; }
        public int? count { get; set; }
        public string title { get; set; }
    }
}

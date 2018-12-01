using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bangazon.Models
{
  public class CustomerandProduct : Customer
  {
    public List<Product> products { get; set; } = new List<Product>();
  }
}

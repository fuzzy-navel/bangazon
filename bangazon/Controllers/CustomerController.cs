using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bangazon.DataAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace bangazon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {

      private readonly CustomerStorage _storage;

      public CustomerController()
      {
        _storage = new CustomerStorage();
      }

      [HttpGet]
      public IActionResult GetCustomers([FromQuery] string q)
      {
        if (q != null)
        {
          return Ok(_storage.GetCustomerQuery(q));
        }
        else
        {
          return Ok(_storage.GetCustomers());
        }
      }

      [HttpGet("{id}")]
      public IActionResult GetCustomerById(int id, [FromQuery] string include)
      {
        if (include == "products")
        {
          return Ok(_storage.GetCustomerandProduct(id));
        }
        else if (include == "payments")
        {
          return Ok(_storage.GetCustomerandPayments(id));
        }
        else
        {
          return Ok(_storage.GetCustomerById(id));
        }
      }

    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bangazon.DataAccess;
using bangazon.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace bangazon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {

      private readonly CustomerStorage _storage;

      public CustomerController(IConfiguration config)
      {
        _storage = new CustomerStorage(config);
      }

      [HttpGet]
      public IActionResult GetCustomers([FromQuery] string q, [FromQuery] string activeOrders)
      {
        if (q != null && activeOrders == null)
        {
          return Ok(_storage.GetCustomerQuery(q));
        }
        else if (q == null && activeOrders == "false")
        {
          return Ok(_storage.GetInactiveCustomers());
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

      [HttpPost]
      public IActionResult AddCustomer(Customer customer)
      {
         if (customer.first_name == null || customer.last_name == null)
         {
            return BadRequest();
         }
        return Ok(_storage.AddCustomer(customer));
      }

      [HttpPut("{id}")]
      public IActionResult UpdateCustomer(Customer customer, int id)
      {
          if (customer.first_name == null || customer.last_name == null)
          {
            return BadRequest();
          }
        return Ok(_storage.UpdateCustomer(customer, id));
      }

    }
}
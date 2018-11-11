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
      public IActionResult GetCustomers()
      {
        return Ok(_storage.GetCustomers());
      }
    }
}
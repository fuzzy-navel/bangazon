using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bangazon.DataAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace bangazon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {

      public readonly EmployeeStorage _storage;

      public EmployeeController(IConfiguration config)
      {
        _storage = new EmployeeStorage(config);
      }

      [HttpGet]
      public IActionResult GetEmployees()
      {
        return Ok(_storage.GetEmployees());
      }
    }
}
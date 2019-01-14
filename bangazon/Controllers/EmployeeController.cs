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

      [HttpGet("{id}")]
      public IActionResult GetEmployee(int id)
      {
        return Ok(_storage.GetEmployee(id));
      }

      [HttpPost]
      public IActionResult AddEmployee(EmployeeTemplate employee)
      {
        if (employee.name == "")
        {
          string message = "Please include a name.";
          return BadRequest(message);
        }
        else if (employee.department_id <= 0)
        {
          string message = "Department Id cannot be less than 1.";
          return BadRequest(message);
        }
        return Ok(_storage.AddEmployee(employee));
      }

      [HttpPut("{id}")]
      public IActionResult UpdateEmployee(EmployeeTemplate employee, int id)
      {
         if (employee.name == "")
        {
          string message = "Please include a name.";
          return BadRequest(message);
        }
        else if (employee.department_id <= 0)
        {
          string message = "Department Id cannot be less than 1.";
          return BadRequest(message);
        }
        return Ok(_storage.UpdateEmployee(employee, id));
      }
    }
}
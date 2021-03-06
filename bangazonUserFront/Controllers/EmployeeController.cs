﻿using System;
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
        return Ok(_storage.AddEmployee(employee));
      }

      [HttpPut("{id}")]
      public IActionResult UpdateEmployee(EmployeeTemplate employee, int id)
      {
        return Ok(_storage.UpdateEmployee(employee, id));
      }
    }
}
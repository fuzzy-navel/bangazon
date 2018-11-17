﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace bangazon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComputerController : ControllerBase
    {
        public ComputerStorage _storage;

        public ComputerController()
        {
            _storage = new ComputerStorage();
        }

        [HttpGet]
        public IActionResult GetAllComputers()
        {
            return Ok(_storage.GetAllComputers());
        }

        [HttpGet("{id}")]
        public IActionResult GetComputerById(int id)
        {
            return Ok(_storage.GetComputerById(id));
        }
    }
}
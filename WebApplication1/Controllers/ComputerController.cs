using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bangazon.Models;
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


        [HttpPut("{id}")]
        public IActionResult Update(int id, Computer computer)
        {

            return Ok(_storage.UpdateComputer(id, computer));
        }


        [HttpPost]
        public IActionResult AddComputer(Computer computer)
        {
            return Ok(_storage.AddComputer(computer));
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok(_storage.DeleteComputer(id));
        }

    }
}
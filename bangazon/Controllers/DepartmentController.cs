using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using bangazon.DataAccess;
using bangazon.Models;

namespace bangazon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly DepartmentStorage _storage;

        public DepartmentController()
        {
            _storage = new DepartmentStorage();
        }

        [HttpGet]
        public IActionResult GetAllDepartments([FromQuery] string includes)
        {
            if(includes == "employees")
            {
                return Ok(_storage.GetDepartmentsWithEmployees());
            } else
            {
                return Ok(_storage.GetAllDepartments());
            }
            
        }

        [HttpGet("{id}")]
        public IActionResult GetDepartmentById(int id, [FromQuery] string includes)
        {
            if(includes == "employees")
            {
                return Ok(_storage.GetDepartmentByIdWithEmployees(id));
            }
            else
            {
                return Ok(_storage.GetDepartmentById(id));
            }
        }

        [HttpPost]
        public IActionResult AddDepartment(Department department)
        {
            return Ok(_storage.AddADepartment(department));
        }

        [HttpPut("{id}")]
        public IActionResult UpdateDepartment(int id, Department department)
        {
            return Ok(_storage.UpdateADepartment(id, department));
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using bangazon.DataAccess;

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
        public IActionResult GetAllDepartments()
        {
            return Ok(_storage.GetAllDepartments());
        }
    }
}
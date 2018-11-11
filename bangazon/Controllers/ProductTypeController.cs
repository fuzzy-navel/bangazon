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
    public class ProductTypeController : ControllerBase
    {
        private readonly BangazonStorage _storage;

        public ProductTypeController()
        {
            _storage = new BangazonStorage();
        }

        [HttpGet]
        public IActionResult GetAllProductTypes()
        {
            return Ok(_storage.GetAllProductTypes());
        }
    }
}
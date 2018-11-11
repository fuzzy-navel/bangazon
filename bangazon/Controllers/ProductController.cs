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
    public class ProductController : ControllerBase
    {
        private readonly ProductStorage _storage;

        public ProductController()
        {
            _storage = new ProductStorage();
        }

        [HttpGet]
        public IActionResult GetAllProducts()
        {
            return Ok(_storage.GetAllProducts());
        }

        [HttpGet("{id}")]
        public IActionResult GetSingleProduct(int id)
        {
            return Ok(_storage.GetSingleProduct(id));
        }
    }
}
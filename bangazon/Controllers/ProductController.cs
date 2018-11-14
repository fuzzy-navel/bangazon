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

        [HttpPost]
        public IActionResult AddNewProduct(int category, decimal price, string title, string description, int quantity, int owner_id)
        {
            return Ok(_storage.AddNewProduct(category, price, title, description, quantity, owner_id));
        }

        [HttpPut("{id}")]
        public IActionResult UpdateProduct(int id, int category, decimal price, string title, string description, int quantity, int owner_id)
        {
            return Ok(_storage.UpdateProduct(id, category, price, title, description, quantity, owner_id));
        }

    }
}
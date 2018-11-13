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

        // Get All Products
        // API example: https://localhost:44398/api/product
        [HttpGet]
        public IActionResult GetAllProducts()
        {
            return Ok(_storage.GetAllProducts());
        }

        // Get Single Product
        // API example: https://localhost:44398/api/product/5
        [HttpGet("{id}")]
        public IActionResult GetSingleProduct(int id)
        {
            return Ok(_storage.GetSingleProduct(id));
        }

        // Add New Product
        // API example: https://localhost:44398/api/product?category=1&price=101&title=FancyObject234&description=Something great&quantity=32&owner_id=5
        [HttpPost]
        public IActionResult AddNewProduct(int category, decimal price, string title, string description, int quantity, int owner_id)
        {
            return Ok(_storage.AddNewProduct(category, price, title, description, quantity, owner_id));
        }

        // Update Product
        // API example: https://localhost:44398/api/product/6/?category=1&price=101111&title=UPDATED!!&description=Something great&quantity=32&owner_id=5
        [HttpPut("{id}")]
        public IActionResult UpdateProduct(int id, int category, decimal price, string title, string description, int quantity, int owner_id)
        {
            return Ok(_storage.UpdateProduct(id, category, price, title, description, quantity, owner_id));
        }

        // Delete Product
        // API example: 

    }
}
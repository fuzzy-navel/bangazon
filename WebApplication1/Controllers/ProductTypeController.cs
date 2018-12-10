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

        [HttpGet("{id}")]
        public IActionResult GetSingleProductType(int id)
        {
            return Ok(_storage.GetProductTypeById(id));
        }

        [HttpPost]
        public IActionResult AddAProductType(ProductType productType)
        {
            return Ok(_storage.AddProductType(productType));
        }

        [HttpPut("{id}")]
        public IActionResult UpdateProductType(int id, ProductType productType)
        {
            return Ok(_storage.UpdateProductType(id, productType));
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProductType(int id)
        {
            return Ok(_storage.DeleteProductType(id));
        }
    }
}
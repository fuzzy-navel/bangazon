using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using bangazon.DataAccess;
using bangazon.Models;
using Microsoft.Extensions.Configuration;

namespace bangazon.Controllers
{
    //[Route("api/[controller]")]
    //[ApiController]
    [Route("api/controller")]
    public class OrderController : ControllerBase
    {
        private readonly OrderStorage _orders;

        public OrderController(IConfiguration config)
        {
            _orders = new OrderStorage(config);
        }

        [HttpGet("orders")]
        public IActionResult GetOrders()
        {
            return Ok(_orders.GetOrders());
        }

        [HttpGet("orderById")]
        public IActionResult GetOrderById(int id)
        {
            return Ok(_orders.GetOrderById(id));
        }
    }
}
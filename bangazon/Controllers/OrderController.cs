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
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly OrderStorage _orders;
        private readonly OrderStorage _insertOrder;
        private readonly OrderStorage _updateOrder;
        private readonly OrderStorage _deleteOrder;

        public OrderController(IConfiguration config)
        {
            _orders = new OrderStorage(config);
            _insertOrder = new OrderStorage(config);
            _updateOrder = new OrderStorage(config);
            _deleteOrder = new OrderStorage(config);
        }

        //#1
        [HttpGet("orders")]
        public IActionResult GetOrders()
        {
            return Ok(_orders.GetOrders());
        }

        //#2
        [HttpGet("orderById/{id}")]
        public IActionResult GetOrderById(int id)
        {
            return Ok(_orders.GetOrderById(id));
        }

        // #3
        [HttpPost("addOrder")]
        public IActionResult PostOrder(Order order)
        {
            return Ok(_insertOrder.PostOrder(order));

        }

        // #4
        //[HttpPut("{id}")]
        //public IActionResult UpdateOrder(int id, Order order)
        //{
        //    return Ok(_updateOrder.UpdateOrderInfo(id, order));

        //}

        // #5
        [HttpDelete("{id}")]
        public IActionResult DeleteOrder(int id)
        {

            return Ok(_deleteOrder.DeleteOrderById(id));
        }
    }
}
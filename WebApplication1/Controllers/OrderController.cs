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


        public OrderController(IConfiguration config)
        {
            _orders = new OrderStorage(config);

        }

        //#1 & #6 INCLUDING QUERY OPTIONS FOR CAN_COMPLETE
        [HttpGet("orders")]
        public IActionResult GetOrders(bool? completed)
        {
            if (completed == true)
            {
                return Ok(_orders.QueryCompletedOrders());
            }
            else if (completed == false)
            {
                return Ok(_orders.QueryIncompleteOrders());
            }
            else if (completed == null)
            {
                return Ok(_orders.GetOrders());
            }
            throw new ArgumentException("something went wrong!");

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
            return Ok(_orders.PostOrder(order));
        }

        // #4
        [HttpPut("{id}")]
        public IActionResult UpdateOrder(int id, Order order)
        {
            return Ok(_orders.UpdateOrderInfo(id, order));
        }

        // #5
        [HttpDelete("{id}")]
        public IActionResult DeleteOrder(int id)
        {
            return Ok(_orders.DeleteOrderById(id));
        }

        // #7
        [HttpGet("ordersByQuery")]
        public IActionResult GetOrdersByQuery(string include)
        {
            if (include == "customers")
            {
                return Ok(_orders.GetOrdersAndCustomers());
            }
            throw new ArgumentException("something went wrong!");
        }


    }
}
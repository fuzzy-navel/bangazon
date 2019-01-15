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
        private readonly OrderRepository _orders;


        public OrderController(IConfiguration config)
        {
            _orders = new OrderRepository(config);

        }

        //#1 & #6 INCLUDING QUERY OPTIONS FOR CAN_COMPLETE
        [HttpGet("orders")]
        public IActionResult GetOrders(bool? completed)
        {
            if (completed == true)
            {
                var completedOrders = _orders.QueryCompletedOrders();
                return Ok(completedOrders);
            }
            else if (completed == false)
            {
                var incompleteOrders = _orders.QueryIncompleteOrders();
                return Ok(incompleteOrders);
            }
            else if (completed == null)
            {
                var allOrders = _orders.GetOrders();
                return Ok(allOrders);
            }
            throw new ArgumentException("something went wrong!");

        }

        //#2
        [HttpGet("orderById/{id}")]
        public IActionResult GetOrderById(int id)
        {
            var getById = _orders.GetOrderById(id);
            return Ok(getById);
        }

        // #3
        [HttpPost("addOrder")]
        public IActionResult PostOrder(Order order)
        {
            var newOrder = _orders.PostOrder(order);
            return Ok(newOrder);
        }

        // #4
        [HttpPut("{id}")]
        public IActionResult UpdateOrder(int id, Order order)
        {
            var replaceValues = _orders.UpdateOrderInfo(id, order);
            return Ok(replaceValues);
        }

        // #5
        [HttpDelete("{id}")]
        public IActionResult DeleteOrder(int id)
        {
            var deleteValues = _orders.DeleteOrderById(id);
            return Ok(deleteValues);
        }

        // #7 && #8
        [HttpGet("ordersByQuery")]
        public IActionResult GetOrdersByQuery(string include)
        {
            if (include == "customers")
            {
                var withCustomerData = _orders.GetOrdersAndCustomers();
                return Ok(withCustomerData);
            }
            if (include == "products")
            {
                var withProductData = _orders.GetOrderWithProducts();
                return Ok(withProductData);
            }
            throw new ArgumentException("something went wrong!");
        }
    }
}
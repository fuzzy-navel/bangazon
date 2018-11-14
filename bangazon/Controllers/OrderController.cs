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
        private readonly OrderStorage _insertOrder;
        private readonly OrderStorage _updatePayment;
        private readonly OrderStorage _deleteOrder;

        public OrderController(IConfiguration config)
        {
            _orders = new OrderStorage(config);
            _insertOrder = new OrderStorage(config);
            _updatePayment = new OrderStorage(config);
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
        //[HttpPost("addOrder")]
        //public IActionResult PostOrder(Order order)
        //{
        //    var success = _insertOrder.PostOrder(1, true, false, 1);
        //    if (success)
        //    {
        //        return Ok();
        //    }
        //    else
        //    {
        //        return BadRequest(new { Message = "Order was not added." });
        //    }
        //}

        // #4
        //[HttpPut("updatePayment")]
        //public IActionResult UpdatePaymentType(Order order)
        //{
        //    var success = _updatePayment.UpdatePaymentTypeId(1, 2);
        //    if (success)
        //    {
        //        return Ok();
        //    }
        //    else
        //    {
        //        return BadRequest(new { Message = "Payment type update was unsuccessful." });
        //    }
        //}

        // #5
        //[HttpDelete("deleteOrder")]
        //public IActionResult DeleteOrder(Order order)
        //{
        //    var success = _deleteOrder.DeleteOrderById(1);
        //    if (success)
        //    {
        //        return Ok();
        //    }
        //    else
        //    {
        //        return BadRequest(new { Message = "No Orders found with that ID." });
        //    }
        //}
    }
}
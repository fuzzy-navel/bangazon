using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bangazon.DataAccess;
using bangazon.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace bangazon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentTypeController : ControllerBase
    {
        public PaymentStorage _storage;
        public PaymentTypeController()
        {
            _storage = new PaymentStorage();
        }

        [HttpGet]
        public IActionResult GetAllPaymentTypes()
        {
            return Ok(_storage.GetAllPaymentTypes());
        }

        [HttpGet("{id}")]
        public IActionResult GetPaymentType(int id)
        {
            return Ok(_storage.GetPaymentType(id));
        }

        //Add
        [HttpPost]
        public IActionResult AddPayment(PaymentType payment)
        {
            return Ok(_storage.AddPayment(payment));
        }
    }
}
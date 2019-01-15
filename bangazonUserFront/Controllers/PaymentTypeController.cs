using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bangazon.DataAccess;
using bangazon.Models;
using bangazonUserFront.Controllers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace bangazon.Controllers
{
    public class PaymentTypeController : SecureControllerBaseController
    {
        public PaymentStorage _storage;
        public PaymentTypeController()
        {
            _storage = new PaymentStorage();
        }

        //Gat a List of all payment types
        [HttpGet]
        public IActionResult GetListOfPayments()
        {
            return Ok(_storage.GetAllPaymentTypes());
        }
        //Get payment type by id
        [HttpGet("{id}")]
        public IActionResult GetOnePaymentById(int id)
        {
            return Ok(_storage.GetPaymentType(id));
        }

        //Add
        [HttpPost]
        public IActionResult AddAPaymentToCustomer(PaymentType payment)
        {
            return Ok(_storage.AddPayment(payment));
        }

        //Update
        [HttpPut("{id}")]
        public IActionResult Update(int id, PaymentType payment)
        {
            return Ok(_storage.UpdatePayment(id, payment));
        }
    }
}
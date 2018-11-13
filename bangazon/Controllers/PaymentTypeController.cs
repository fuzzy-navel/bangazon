using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bangazon.DataAccess;
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
    }
}
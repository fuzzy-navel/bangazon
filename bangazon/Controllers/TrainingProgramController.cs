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
    public class TrainingProgramController : ControllerBase
    {
        private readonly TrainingProgramStorage _storage;

        public TrainingProgramController(IConfiguration config)
        {
            _storage = new TrainingProgramStorage(config);
        }

        // Get All Training Programs
        // API example: https://localhost:44398/api/trainingprogram
        [HttpGet]
        public IActionResult GetAllTrainingPrograms()
        {
            return Ok(_storage.GetAllTrainingPrograms());
        }
    }
}
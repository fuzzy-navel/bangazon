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
        // API example: https://localhost:44398/api/trainingprogram?completed=false
        [HttpGet]
        public IActionResult GetAllTrainingPrograms([FromQuery] string completed)
        {
            if (completed == "false")
            {
                // Training starts today or in the future
                return Ok(_storage.GetAllTrainingProgramsTodayOrFuture());
            }
            else
            {
                return Ok(_storage.GetAllTrainingPrograms());
            }
        }

        // Get Single Training Program
        // API example: https://localhost:44398/api/trainingprogram/3
        // API example: https://localhost:44398/api/trainingprogram/2?completed=false
        [HttpGet("{id}")]
        public IActionResult GetSingleTrainingProgram(int id, [FromQuery] string completed)
        {
            if (completed == "false")
            {
                // Training starts today or in the future
                return Ok(_storage.GetSingleTrainingProgramTodayOrFuture(id));
            }
            else {
                return Ok(_storage.GetSingleTrainingProgram(id));
            }
        }

        // Post New Training Program
        // API example: https://localhost:44398/api/trainingprogram ...[need to add in a JSON object here]
        [HttpPost]
        public IActionResult AddNewTrainingProgram(TrainingProgram trainingProgram)
        {
            return Ok(_storage.AddNewTrainingProgram(trainingProgram));
        }

        // Delete Training Program
        // API example: https://localhost:44398/api/trainingprogram/3/
        [HttpDelete("{id}")]
        public IActionResult DeleteTrainingProgram(int id)
        {
            return Ok(_storage.DeleteTrainingProgram(id));
        }

        // Update Training Program
        // API example: https://localhost:44398/api/trainingprogram ...[need to add in a JSON object here]
        [HttpPut("{id}")]
        public IActionResult UpdateTrainingProgram(int id, TrainingProgram trainingProgram)
        {
            return Ok(_storage.UpdateTrainingProgram(id, trainingProgram));
        }

        //returns a list of attendees
        [HttpGet("{id}/attendees")]
        public IActionResult GetAttendees(int id)
        {
          return Ok(_storage.GetTPEmployees(id));
        }


    }
}
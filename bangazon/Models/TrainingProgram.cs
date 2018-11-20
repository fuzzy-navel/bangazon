using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bangazon.Models
{
    public class TrainingProgram
    {
        public DateTime Start_Date { get; set; }
        public DateTime End_Date { get; set; }
        public int Max_Attendees { get; set; }
        public int Id { get; set; }
        public string EmployeeName { get; set; }
    }
}

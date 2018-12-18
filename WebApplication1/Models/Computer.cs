using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace bangazon.Models
{
    public class Computer
    {
        public int id { get; set; }
        [Required]
        public DateTime purchase_date { get; set; }

        [DataType(DataType.Date)]
        public DateTime? decommissioned { get; set; }

        public int employee_id { get; set; }

        [Required]
        public bool in_use { get; set; }

        public bool is_malfunctioning { get; set; }

        [Required]
        [DataType(DataType.Text)]
        public string make { get; set; }

        [Required]
        [DataType(DataType.Text)]
        public string model { get; set; }
    }
}

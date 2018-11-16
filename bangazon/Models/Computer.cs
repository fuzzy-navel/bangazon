using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bangazon.Models
{
    public class Computer
    {
        public int id { get; set; }
        public DateTime purchased_date { get; set; }
        public DateTime decommissioned { get; set; }
        public int employee_id { get; set; }
        public bool in_use { get; set; }
        public bool is_malfunctioning { get; set; }
    }
}

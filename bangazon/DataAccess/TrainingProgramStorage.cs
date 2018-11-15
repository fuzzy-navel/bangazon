using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using bangazon.Models;
using Dapper;

namespace bangazon.DataAccess
{
    public class TrainingProgramStorage
    {
        private readonly string ConnectionString;

        public TrainingProgramStorage(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }

        public IEnumerable<TrainingProgram> GetAllTrainingPrograms()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<TrainingProgram>(@"select * from training_programs");
                return result;
            }
        }
    }
}

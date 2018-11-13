using bangazon.Models;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace bangazon.DataAccess
{
    public class PaymentStorage
    {
        private const string ConnectionInfo = "Server = (local); Database=Bangazon; Trusted_Connection=True";

       public IEnumerable<PaymentType>GetAllPaymentTypes()
        {
            using (var connection = new SqlConnection(ConnectionInfo))
            {
                connection.Open();
                var result = connection.Query<PaymentType>(@"select * from payment_type");

                return result;

            }

        }

        public IEnumerable<PaymentType> GetPaymentType(int id)
        {
            using (var connection = new SqlConnection(ConnectionInfo))
            {
                connection.Open();
                var result = connection.Query<PaymentType>(@"select * 
                                                           from payment_type p 
                                                           where p.id = @id", new { id = id });
                return result;
            }
        }

    }
}

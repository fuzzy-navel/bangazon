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
        private const string ConnectionString = "Server = (local); Database=Bangazon; Trusted_Connection=True";

       public IEnumerable<PaymentType>GetAllPaymentTypes()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<PaymentType>(@"select * from payment_type");

                return result;

            }

        }

        public IEnumerable<PaymentType> GetPaymentType(int id)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<PaymentType>(@"select * 
                                                           from payment_type p 
                                                           where p.id = @id", new { id = id });
                return result;
            }
        }

        public bool AddPayment(PaymentType payment)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Execute(@"INSERT INTO [dbo].[payment_type]([account_number], [customer_id], [active], [title])
                                                  VALUES (@account_number, @customer_id, @active, @title)", payment);

                return result == 1;
            }
        }

        public bool DeletePayment(int paymentId)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Execute("@Delete from [dbo].payment_type Where id = @id", new {paymentId});

                return result == 1;
            }
        }
    }
}

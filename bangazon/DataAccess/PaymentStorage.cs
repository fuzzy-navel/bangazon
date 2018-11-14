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
                //SET IDENTITY_INSERT[].[] OFF; 
                var result = connection.Execute(@"INSERT INTO [dbo].[payment_type]([account_number], [customer_id])
                                                  VALUES (@account_number, @customer_id)", payment);

                return result == 1;
            }
        }

        public bool DeletePayment(int paymentId)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Execute("Delete from payment_type Where id = @id and not exists(select * from orders where orders.payment_type_id = @id)",new { id = paymentId } );


                    //("Delete from payment_type Where id = @id", new { id = paymentId });

                return result == 1;
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using bangazon.Models;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;

namespace bangazon.DataAccess
{
    public class OrderStorage
    {
        static List<Order> _orders = new List<Order>();

        private readonly string ConnectionString;

        public OrderStorage(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }
        // 1) GET ALL ORDERS
        public List<Order> GetOrders()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result1 = connection.Query<Order>(@"SELECT 
                                                        CustomerId = customer_id, 
                                                        OrderStatus = order_status, 
                                                        CanComplete = can_complete,
                                                        PaymentTypeId = payment_type_id, 
                                                        Id = id 
                                                      FROM orders");
                return result1.ToList();
            }
        }
        // 2) GET SINGLE ORDER BY ID
        public List<Order> GetOrderById(int id)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result2 = connection.Query<Order>(@"SELECT 
                                                        CustomerId = customer_id, 
                                                        OrderStatus = order_status, 
                                                        CanComplete = can_complete,
                                                        PaymentTypeId = payment_type_id, 
                                                        Id = id 
                                                      FROM orders as o               
                                                      WHERE o.id = @id",
                                                      new { id = id}
                                                      );
                return result2.ToList();
            }
        }
        // 3) INSERT A NEW ORDER
        public bool PostOrder(Order order)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result3 = connection.Execute(@" INSERT INTO [dbo].[orders]([customer_id], [order_status], [can_complete], [payment_type_id])
                                                    VALUES(@CustomerId, @OrderStatus, @CanComplete, @PaymentTypeId)", order );


                return result3 == 1;
            }
        }
        //public bool PostOrder(int customer_id, bool order_status, bool can_complete, int payment_type)
        //{
        //    using (var connection = new SqlConnection(ConnectionString))
        //    {
        //        connection.Open();
        //        string sql = "INSERT INTO orders(CustomerId, OrderStatus, CanComplete, PaymentTypeId) VALUES(@CustomerId, @OrderStatus, @CanComplete, @PaymentTypeId)";
        //        var result3 = connection.Execute(sql, new { CustomerId = customer_id, OrderStatus = order_status, CanComplete = can_complete, PaymentTypeId = payment_type });
        //        return result3 == 1;
        //    }
        //}

        // 4) UPDATE PAYMENT TYPE OF AN ORDER
        //public bool UpdatePaymentTypeId(int customer_id, int payment_type_id)
        //{
        //    using (var connection = new SqlConnection(ConnectionString))
        //    {
        //        connection.Open();
        //        var sql = "UPDATE orders SET PaymentTypeId = @payment_type_id WHERE CustomerId = @customer_id";
        //        var result4 = connection.Execute(sql, new { CustomerId = customer_id, PaymentTypeId = payment_type_id });
        //        return result4 == 1;
        //    }
        //}

        // 5) DELETE AN ORDER
        //public bool DeleteOrderById(int id)
        //{
        //    using (var connection = new SqlConnection(ConnectionString))
        //    {
        //        connection.Open();
        //        string sql = "DELETE FROM orders as o WHERE o.id = @id";
        //        var result5 = connection.Execute(sql, new { Id = id });
        //        return result5 > 0;
        //    }
        //}

    }
}

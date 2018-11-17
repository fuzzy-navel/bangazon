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
                var result3 = connection.Execute(@" INSERT INTO [dbo].[orders]
                                                    ([customer_id], 
                                                    [order_status], 
                                                    [can_complete], 
                                                    [payment_type_id])
                                                    VALUES(@CustomerId, @OrderStatus, @CanComplete, @PaymentTypeId)", order 
                                                  );

                return result3 == 1;
            }
        }


        // 4) UPDATE AN ORDER
        public bool UpdateOrderInfo(int id, Order order)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                
                var result4 = connection.Execute(@"UPDATE [dbo].[orders]
                                                    SET [customer_id] = @CustomerId, 
                                                        [order_status] = @OrderStatus, 
                                                        [can_complete] = @CanComplete, 
                                                        [payment_type_id] = @PaymentTypeId
                                                    WHERE id = @id",
                                                    new
                                                    {
                                                        id,
                                                        customer_id = order.CustomerId,
                                                        order_status = order.OrderStatus,
                                                        can_complete = order.CanComplete,
                                                        payment_type_id = order.PaymentTypeId,
                                                    });
                return result4 == 1;
            }
        }

         // 5) DELETE AN ORDER
        public bool DeleteOrderById(int id)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result5 = connection.Execute(@"DELETE FROM [dbo].[orders] WHERE id = @Id", new { id });
                return result5 == 1;
            }
        }

    }
}

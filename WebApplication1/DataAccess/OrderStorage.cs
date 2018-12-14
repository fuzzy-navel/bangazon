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
    public class OrderRepository
    {
        static List<Order> _orders = new List<Order>();

        private readonly string ConnectionString;

        public OrderRepository(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }
        // 1) GET ALL ORDERS 
        public List<Order> GetOrders()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<Order>(@"SELECT 
                                                        CustomerId = customer_id, 
                                                        OrderStatus = order_status, 
                                                        CanComplete = can_complete,
                                                        PaymentTypeId = payment_type_id, 
                                                        Id = id 
                                                      FROM orders");
                return result.ToList();
            }
        }
        // 2) GET SINGLE ORDER BY ID
        public List<Order> GetOrderById(int id)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<Order>(@"SELECT 
                                                        CustomerId = customer_id, 
                                                        OrderStatus = order_status, 
                                                        CanComplete = can_complete,
                                                        PaymentTypeId = payment_type_id, 
                                                        OrderId = id 
                                                      FROM orders as o               
                                                      WHERE o.id = @id",
                                                      new { id = id }
                                                      );
                return result.ToList();
            }
        }
        // 3) INSERT A NEW ORDER
        public bool PostOrder(Order order)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Execute(@" INSERT INTO [dbo].[orders]
                                                    ([customer_id], 
                                                    [order_status], 
                                                    [can_complete], 
                                                    [payment_type_id])
                                                    VALUES(@CustomerId, @OrderStatus, @CanComplete, @PaymentTypeId)", order
                                                  );

                return result == 1;
            }
        }


        // 4) UPDATE AN ORDER
        public bool UpdateOrderInfo(int id, Order order)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Execute(@"UPDATE [dbo].[orders]
                                                    SET [customer_id] = @CustomerId, 
                                                        [order_status] = @OrderStatus, 
                                                        [can_complete] = @CanComplete, 
                                                        [payment_type_id] = @PaymentTypeId
                                                    WHERE id = @Id",
                                                    new
                                                    {
                                                        id,
                                                        order.CustomerId,
                                                        order.OrderStatus,
                                                        order.CanComplete,
                                                        order.PaymentTypeId,
                                                    });
                return result == 1;
            }
        }

        // 5) DELETE AN ORDER
        public bool DeleteOrderById(int id)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Execute(@"DELETE FROM [dbo].[orders] WHERE id = @OrderId", new { id });
                return result == 1;
            }
        }

        // 6) ENDPOINT TO RETRIEVE ORDERS USING THE '?can_complete=false' QUERY STRING PARAMETER
        public List<Order> QueryIncompleteOrders()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<Order>(@"SELECT 
                                                        CustomerId = customer_id, 
                                                        OrderStatus = order_status, 
                                                        CanComplete = can_complete,
                                                        PaymentTypeId = payment_type_id, 
                                                        OrderId = id 
                                                      FROM orders
                                                      WHERE order_status = 0");
                return result.ToList();
            }
        }

        // 6.1) ENDPOINT TO RETRIEVE ORDERS USING THE '?can_complete=true' QUERY STRING PARAMETER
        public List<Order> QueryCompletedOrders()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<Order>(@"SELECT
                                                        CustomerId = customer_id,
                                                        OrderStatus = order_status,
                                                        CanComplete = can_complete,
                                                        PaymentTypeId = payment_type_id,
                                                        OrderId = id
                                                      FROM orders
                                                      WHERE order_status = 1");

                return result.ToList();
            }
        }

        // 7) ENDPOINT TO RETRIEVE CUSTOMER INFO ALONG WITH ORDER INFO USING ?_include=customer
        public List<OrderWithCustomer> GetOrdersAndCustomers()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                var result = connection.Query<OrderWithCustomer>(@"SELECT
                                                                    FirstName = c.first_name,
                                                                    LastName = c.last_name,
                                                                    DateJoined = c.date_joined,
                                                                    Active = c.active,   
                                                                    CustomerId = o.customer_id,
                                                                    OrderStatus = o.order_status,
                                                                    CanComplete = o.can_complete,
                                                                    PaymentTypeId = o.payment_type_id,
                                                                    OrderId = o.id
                                                                  FROM orders as o
                                                                  JOIN customer as c ON c.id = o.customer_id
                                                                ");

                return result.ToList();
            }

        }

        // 8) ENDPOINT TO RETRIEVE PRODUCT INFO ALONG WITH ORDER INFO USING ?_include=products

        public List<OrderWithProduct> GetOrderWithProducts()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                var orderDetails = connection.Query<Order>(@"SELECT 
                                                            CustomerId = o.customer_id,
                                                            OrderStatus = o.order_status,
                                                            CanComplete = o.can_complete,
                                                            PaymentTypeId = o.payment_type_id,
                                                            OrderId = o.id
                                                            FROM orders AS o 
                                                            ");
                List<OrderWithProduct> orders = new List<OrderWithProduct>();
                foreach (var order in orderDetails)
                {
                    var orderWithProduct = new OrderWithProduct
                    {
                        CustomerId = order.CustomerId,
                        OrderStatus = order.OrderStatus,
                        CanComplete = order.CanComplete,
                        PaymentTypeId = order.PaymentTypeId,
                        OrderId = order.Id
                    };

                    var productDetails = connection.Query<Product>(@"SELECT 
                                                                Title = p.title
                                                                FROM product AS p
                                                                join order_product_pair as opp on p.id = opp.product_id
                                                                WHERE opp.order_id = @OrderId", new { order.Id });
                    if (productDetails.Any())
                    {
                        foreach (var product in productDetails)
                        {
                            orderWithProduct.ProductTitle.Add(product.Title);
                        }
                        orders.Add(orderWithProduct);

                    }

                }
                return orders.ToList();

            }
        }


    }
}

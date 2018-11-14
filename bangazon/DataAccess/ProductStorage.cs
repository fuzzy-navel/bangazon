using System;
using Dapper;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using bangazon.Models;
using Microsoft.Extensions.Configuration;

namespace bangazon.DataAccess
{
    public class ProductStorage
    {
        private readonly string ConnectionString;

        public ProductStorage(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }

        public IEnumerable<Product> GetAllProducts()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<Product>(@"select * from product");
                return result;
            }
        }

        public IEnumerable<Product> GetSingleProduct(int id)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<Product>(@"select * 
                                from product as p
                                where p.id = @id", new { id });
                return result;
            }
        }

        public bool AddNewProduct(Product product)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                db.Open();

                var result = db.Execute(
                        @"insert into [dbo].[product]([category], [price], [title], [description], [quantity], [owner_id])
                        VALUES (@category, @price, @title, @description, @quantity, @owner_id)", product
                );
                return result == 1;
            }
        }

        // public bool UpdateProduct(int id, int category, decimal price, string title, string description, int quantity, int owner_id)
        public bool UpdateProduct(int id, Product product)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                db.Open();
                var result = db.Execute(@"UPDATE [dbo].[product]
                    SET [category] = @category, [price] = @price, [title] = @title, [description] = @description, [quantity] = @quantity, [owner_id] = @owner_id
                    WHERE id = @id", 
                    product
                );
                return result == 1;
            }
        }

        public bool DeleteProduct(int id)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                db.Open();
                var result = db.Execute(@"DELETE FROM [dbo].product WHERE id = @Id", new { id });
                return result == 1;
            }
        }
    }
}

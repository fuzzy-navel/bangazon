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
                var result = connection.Query<Product>(
                    @"SELECT 
                        product_types.category as category, 
                        product.id as id, 
                        product.categoryId as categoryId, 
                        product.price as price, 
                        product.title as title, 
                        product.description as description, 
                        product.quantity as quantity
                    FROM product
                        INNER JOIN dbo.product_types ON dbo.product.categoryId = dbo.product_types.id
                    ORDER BY id");
                return result;
            }
        }

        public IEnumerable<Product> GetSingleProduct(int id)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
                var result = connection.Query<Product>(
                    @"SELECT *, product_types.category AS category
                    FROM product
                        INNER JOIN dbo.product_types ON dbo.product.categoryId = dbo.product_types.id
                    WHERE product.id = @id", new { id });
                return result;
            }
        }

        public bool AddNewProduct(Product product)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                db.Open();

                var result = db.Execute(
                        @"insert into [dbo].[product]([category], [categoryName], [price], [title], [description], [quantity], [owner_id])
                        VALUES (@category, @null, @price, @title, @description, @quantity, @owner_id)", product
                );
                return result == 1;
            }
        }

        public bool UpdateProduct(int id, Product product)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                db.Open();
                var result = db.Execute(@"UPDATE [dbo].[product]
                    SET [category] = @category, [categoryName] = @categoryname, [price] = @price, [title] = @title, [description] = @description, [quantity] = @quantity, [owner_id] = @owner_id
                    WHERE id = @id", 
                    new {
                        id,
                        categoryId = product.CategoryId,
                        price = product.Price,
                        title = product.Title,
                        description = product.Description,
                        quantity = product.Quantity,
                        owner_id = product.Owner_Id,
                    }
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

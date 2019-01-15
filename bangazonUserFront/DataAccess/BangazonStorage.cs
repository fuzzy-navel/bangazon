using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using bangazon.Models;
using Dapper;

namespace bangazon.DataAccess
{
    public class BangazonStorage
    {
        private const string ConnectionInfo = "Server = (local); Database=Bangazon; Trusted_Connection=True";

        public List<ProductType> GetAllProductTypes()
        {
            using (var db = new SqlConnection(ConnectionInfo))
            {
                db.Open();

                List<ProductType> ProductTypes = new List<ProductType>();

                var command = db.CreateCommand();
                command.CommandText = @"SELECT *
                                        FROM product_types";

                var reader = command.ExecuteReader();

                while (reader.Read())
                {
                    var currentProductType = new ProductType()
                    {
                        category = reader["category"].ToString(),
                        id = (int)reader["id"]
                    };

                    ProductTypes.Add(currentProductType);
                }

                return ProductTypes;
            }
        }

        public string GetProductTypeById(int id)
        {
            using (var db = new SqlConnection(ConnectionInfo))
            {
                db.Open();

                var command = db.CreateCommand();
                command.CommandText = @"SELECT *
                                        FROM product_types
                                        WHERE id = @id";

                command.Parameters.AddWithValue("@id", id);

                var categoryName = command.ExecuteScalar().ToString();

                return categoryName;
            }
        }

        public bool AddProductType(ProductType productType)
        {
            using (var db = new SqlConnection(ConnectionInfo))
            {
                db.Open();

                var result = db.Execute(
                    @"insert into [dbo].[product_types]([category])
                    VALUES (@category)", productType
                );

                return result == 1;
            }
        }

        public bool UpdateProductType(int id, ProductType productType)
        {
            using (var db = new SqlConnection(ConnectionInfo))
            {
                db.Open();

                var result = db.Execute(@"Update [dbo].[product_types]
                                          SET category = @category
                                          WHERE id = @id", new { id, productType.category });

                return result == 1;
            }
        }

        public bool DeleteProductType(int id)
        {
            using (var db = new SqlConnection(ConnectionInfo))
            {
                db.Open();

                var result = db.Execute(@"DELETE FROM [dbo].product_types WHERE id = @Id", new { id });

                return result == 1;
            }
        }
    }
}

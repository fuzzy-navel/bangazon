using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using bangazon.Models;

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
    }
}

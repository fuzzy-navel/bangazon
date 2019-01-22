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

        public IEnumerable<ProductType> GetAllProductTypes()
        {
            using (var db = new SqlConnection(ConnectionInfo))
            {
                db.Open();
                var result = db.Query<ProductType>(
                    @"SELECT category, COUNT(*) as Count
                    FROM product_types
	                    INNER JOIN dbo.product ON dbo.product_types.id = dbo.product.categoryId
                    GROUP BY category");
                return result;
            }
        }

        public IEnumerable<ProductType> GetLastThreeProductsByCategory()
        {
            using (var db = new SqlConnection(ConnectionInfo))
            {
                db.Open();
                var result = db.Query<ProductType>(
                    @"WITH TOPTHREE AS (
	                    SELECT *, ROW_NUMBER()
	                    over (
		                    PARTITION BY product.categoryId
		                    ORDER BY product.id desc
	                    ) AS RowNo
	                    FROM product
                        )
                        SELECT TOPTHREE.id as prodId, TOPTHREE.price, TOPTHREE.title, TOPTHREE.description, TOPTHREE.quantity, product_types.category, product_types.id
                        FROM TOPTHREE 
	                        JOIN product_types ON TOPTHREE.categoryId = product_types.id
                        WHERE RowNo <= 3");
                return result;
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

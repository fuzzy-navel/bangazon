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
        private const ConnectionString = @"Server.\SQLEXPRESS;Database=Bangazon; Trusted_Connection=True";

        public List<Order> GetOrders()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();
            }
        }
    }
}

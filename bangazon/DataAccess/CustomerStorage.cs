using bangazon.Models;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace bangazon.DataAccess
{
  public class CustomerStorage
  {
    private const string conString = "Server = (local); Database=Bangazon; Trusted_Connection=True";

    public IEnumerable<Customer> GetCustomers()
    {
      using (var connection = new SqlConnection(conString))
      {
        connection.Open();

        var result = connection.Query<Customer>(@"select * from customer");

        return result;
      }
    }
  }
}

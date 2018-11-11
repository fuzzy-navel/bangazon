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

    public IEnumerable<Customer> GetCustomerById(int id)
    {
      using (var connection = new SqlConnection(conString))
      {
        connection.Open();

        var result = connection.Query<Customer>(@"select * 
                                from customer as c
                                where c.id = @id", new {id = id});

        return result;
      }
    }

    public IEnumerable<CustomerandProduct> GetCustomerandProduct(int id)
    {
      using (var connection = new SqlConnection(conString))
      {
        connection.Open();

        var result = connection.Query<CustomerandProduct>(@"select * 
                                from customer as c
                                join product as p
                                on p.owner_id = c.id
                                where c.id = @id", new {id = id});

        return result;
      }
    }

    public IEnumerable<CustomerandPayment> GetCustomerandPayments(int id)
    {
      using (var connection = new SqlConnection(conString))
      {
        connection.Open();

        var result = connection.Query<CustomerandPayment>(@"select * 
                                from customer as c
                                join payment_type as p
                                on p.customer_id = c.id
                                where c.id = @id", new {id = id});

        return result;
      }
    }

    public IEnumerable<Customer> GetCustomerQuery(string query)
    {
      using (var connection = new SqlConnection(conString))
      {
        connection.Open();

        var result = connection.Query<Customer>(@"select * 
                                from customer as c
                                where c.first_name Like @query
	                                or c.last_name Like @query
	                                or c.active Like @query
	                                or c.id Like @query", new {query = "%" + query + "%"});
        return result;
      }
    }
  }
}

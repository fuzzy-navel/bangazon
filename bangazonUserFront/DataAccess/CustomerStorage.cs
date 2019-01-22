using bangazon.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace bangazon.DataAccess
{
  public class CustomerStorage
  {
    private readonly string conString;

    public CustomerStorage(IConfiguration config)
    {
      conString = config.GetSection("ConnectionString").Value;
    }

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

        var customer = connection.Query<CustomerandProduct>(@"select * from customer as c where c.id = @id", new {id = id});

        var products = connection.Query<Product>(@"select * from product as p where p.owner_id = @id", new {id = id}).ToList();

        foreach (var cust in customer)
        {
          cust.products = products;
        }

        var result = customer;

        return result;
      }
    }

    public IEnumerable<CustomerandPayment> GetCustomerandPayments(int id)
    {
      using (var connection = new SqlConnection(conString))
      {
        connection.Open();

        var customer = connection.Query<CustomerandPayment>(@"select * from customer as c where c.id = @id", new { id = id });

        var paymentTypes = connection.Query<PaymentType>(@"select * 
                                    from payment_type as p
                                    where p.customer_id = @id", new { id = id }).ToList();

        foreach (var cust in customer)
        {
          cust.paymentTypes = paymentTypes;
        }

        var result = customer;

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

    public IEnumerable<Customer> GetInactiveCustomers()
    {
      using (var connection = new SqlConnection(conString))
      {
        connection.Open();

        var result = connection.Query<Customer>(@"select first_name, last_name, date_joined, active, customer.id as id 
                                from customer
                                left join orders
                                on orders.customer_id = customer.id
                                where 
	                                orders.customer_id is null
	                                and customer.id is not null");

        return result;
      }
    }

    public bool AddCustomer(Customer customer)
    {
      using (var connection = new SqlConnection(conString))
      {
        connection.Open();

        var result = connection.Execute(@"INSERT INTO [dbo].[customer]([first_name],[last_name],[date_joined],[active],[id])
                             VALUES (@first_name,@last_name,@date_joined,@active,@id)", customer);

        return result == 1;
      }
    }

    public bool UpdateCustomer(Customer customer, int id)
    {
      using (var connection = new SqlConnection(conString))
      {
        connection.Open();

        var result = connection.Execute(@"UPDATE [dbo].[customer]
                                 SET [first_name] = @first_name, [last_name] = @last_name, [date_joined] = @date_joined, [active] = @active
                                 WHERE customer.id = @id", new {id, first_name = customer.first_name, last_name = customer.last_name, date_joined = customer.date_joined, active = customer.active});

        return result == 1;
      }
    }

  }
}

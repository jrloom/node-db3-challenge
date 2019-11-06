# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

```sql
select p.productName, c.categoryName
from products as p
join categories as c on p.CategoryId = c.CategoryId;

```

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

```sql
select o.orderId, s.shipperName, o.orderDate
from orders as o
join shippers as s on o.shipperId = s.shipperId
where orderDate < '1997-01-09';
```

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

```sql
select p.productname , o.quantity
from products as p
join orderDetails as o on p.productId = o.productId
where orderID=10251
order by p.productname desc;
```

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

```sql
 select o.orderid, c.customername as [Customer Name], e.lastname as [Employee]
 from orders as o
 join customers as c on o.customerId = c.customerId
 join employees as e on o.employeeid = e.employeeId
```

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

```sql
select c.CategoryName as [Category], count(*) as [Count]
from categories as c
join products as p on p.categoryId = c.categoryId
group by c.CategoryName;
```

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

```sql
SELECT orderId, Sum(quantity) as [Item Count]
from orderDetails
group by orderId
```

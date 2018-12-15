# Bamazon
Amazon like storefront written with Node and MySQL - Homework

When launching Bamazon the user is displayed with all available products. 


This information is pulled from the MySQL database `bamazon.sql`. The user is then prompted with two `npm inquirer` questions asking what product she would like to purchase (by id number) and what quantity. 


If that quantity is available then she would receive a message like a receipt telling her what quantity was purchased and for how much. The database would also update to the new quantity of that product after the purchase. 


If the quantity asked for exceeds the quantity in stock then the user will receive a message back `Insuffiecient quantity!`.

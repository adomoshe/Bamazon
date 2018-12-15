# Bamazon
### Amazon like storefront written with Node and MySQL - Homework

### Resources:
##### Written in JavaScript on Node.js and MySQL as a database. Using the following npm packages on Node: 
* mysql
* inquirer

When launching Bamazon the user is displayed with all available products. 
![available_products](/screenshots/product_display.png)

This information is pulled from the MySQL database `bamazon.sql`. The user is then prompted with two `npm inquirer` questions asking what product she would like to purchase (by id number) and what quantity. 
![inquirer_questions](/screenshots/inquirer_questions.png)

If that quantity is available then she would receive a message like a receipt telling her what quantity was purchased and for how much. The database would also update to the new quantity of that product after the purchase. 
![receipt](/screenshots/purchase_receipt.png)

If the quantity asked for exceeds the quantity in stock then the user will receive a message back `Insuffiecient quantity!`.

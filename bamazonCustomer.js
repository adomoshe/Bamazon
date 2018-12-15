const mysql = require(`mysql`);
const inquirer = require(`inquirer`);

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    start();
});

function start() {
    connection.query(`SELECT * FROM products`, function (err, res) {
        if (err) throw err;
        console.log(res);
        console.log(`\n`);
        inquirer
            .prompt([
                {
                    type: `input`,
                    message: `What product would you like to purchase? (enter id #)`,
                    name: `product`
                },
                {
                    type: `input`,
                    message: `How many would you like to purchase?`,
                    name: `quantity`
                }
            ])
            .then(function (reply) {
                connection.query(`SELECT * FROM products WHERE ?`, { item_id: reply.product }, function (err, res) {
                    if (err) throw err;
                    if (parseInt(reply.quantity) <= parseInt(res[0].stock_quantity)) {
                        let newQuan = parseInt(res[0].stock_quantity) - parseInt(reply.quantity);
                        connection.query(`UPDATE products SET ? WHERE ?`, [{ stock_quantity: newQuan }, { item_id: reply.product }], function (err, res) {
                            if (err) throw err;
                        });
                        connection.query(`SELECT * FROM products WHERE ?`, { item_id: reply.product }, function (err, res) {
                            if (err) throw err;
                            console.log(`\n${res[0].stock_quantity} ${res[0].product_name} left in stock...\n`)
                            console.log(`You paid $${(parseInt(reply.quantity) * parseFloat(res[0].price)).toFixed(2)} for ${parseInt(reply.quantity)} ${res[0].product_name}\n`);
                        })
                        return;
                    } else {
                        console.log(`Insufficent quantity!`);
                    };
                });
            });
    });
};
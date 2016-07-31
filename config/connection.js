var mysql = require('mysql');
var connection = mysql.createConnection({
	port: 3306,
	host: 'bqmayq5x95g1sgr9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'lo05dw276mb2w1z8',
	password: 'h3id2svvxa4r6ae3',
	database: "nvoc65462s60dt0h"
});

// var connection = mysql.createConnection({
// 	port: 3306,
// 	host: 'localhost',
// 	user: 'root',
// 	password: '',
// 	database: "burgers_db"
// });

connection.connect(function (err){
	if(err) {
		console.log("Connection error:" + err.stack);
		return;
	}

	console.log('Connected as id:' + connection.threadId);

 });

module.exports = connection;
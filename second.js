// var fs = require('fs');
// var path = require('path');
// var path =path.join(__dirname, 'umang');

// console.log(path)

// fs.writeFileSync(path+"/hello.txt", "this is a text");

// let a=34;
// let b=321;

// let waitData=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve(321)
//   },2000)  
// })


// waitData.then((b)=>{
//   console.log(a+b)
// }) 



var mysql= require('mysql');

var con = mysql.createConnection({
    host : "localhost",
    username : "yourusername",
    password : "yourpassword"
});
con.connect(function (err){
  // if (err) throw err;
  console.log("connected!");
  con.query("CREATE DATABASE mydb", function (err, result){
    // if (err) throw err;
    console.log("Database Created!");

  var sql = "CREATE TABLE customers(name VARCHAR(255),  address VARCHAR(266)";
    // if (err) throw err;
  con.query(sql, function(err, result){
    console.log("Table Created");
  
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    // if (err) throw err;
    console.log("1 record inserted");
  });
 });  
});
});


const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.get("/",(req,resp)=>{
    resp.json({
        "first_name": "Nikhil",
        "last_name" : "Sharma",
        "email" : "nikhil@example.com",
        "contact_number" : "23556763",
    })

})
app.listen(5000);
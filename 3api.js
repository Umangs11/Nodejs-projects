const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.get("/",(req,resp)=>{
    resp.json({
          "page":"2",
            "limit": "25",
    },
    {
        "current_page": "1",
        "first_page_url": "string",
        "from": "1",
        "next_page_url": "null",
        "path": "string",
        "per_page":"25",
        "perv_page_url": "null",
        "to" :"25",
        "data": [{}]
    })

})
app.listen(4500);
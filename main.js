const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.get("/",(req,resp)=>{
    resp.json({
        "first_name": "Nikhil",
        "last_name" : "Scott",
        "email" : "mscott@gmail.com",
        "contact_number" : "+1123226666",
        "avatar":  null,
        "gender": "Male",
        "specialization" : "Computer Science",
        "work_ex_year" :"2",
        "candidate_dob":"1586511265",
        "created_on":"1586511265",
        "updated_on":"1586511265",
        "address": "",
        "skills": "Java,Python",
        "resume": null
    })

})

  
app.listen(5500);
const express = require("express");
const path = require('path');


const app = express();

const publicPath=path.join(__dirname,'public');   

app.use(express.static(publicPath));

app.get("/aboutus",(req,resp)=>{
  resp.sendFile(`${publicPath}/about.html`)

})
// app.get("", (req, resp) => {
  
//   resp.send(`"Welcome, This is our Home page", 
//   <a href="/about">Go to home page</a>
//   `);
// });

// app.get("/about", (req, resp) => {
//   resp.send("hello,this is about page");
// });

// app.set('view engine','ejs');

//   app.get('/profile',(req,resp)=>{
//     const user={
//       name:'Umang sharma',
//       email:'umang@test.com',
//       contact:9649343949
//     }
    

//    resp.render('profile',{user});
//   });


app.listen(2200);

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.set("view engine", "ejs")

app.get('/test', (req, res) =>{
    res.render("index", {})
});

app.listen(port, ()=>{
    console.log(` ejs server is running ${port}`);
})
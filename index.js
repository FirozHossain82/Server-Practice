const express = require("express");
const app = express();
const cors = require("cors");
const Port = process.env.Port || 5000;
app.use(cors());


const productsCollection = require("./Data/product.json");

app.get("/", (req, res) =>{
    res.send("Now Server is running");
})

app.get('/allProducts', (req, res) =>{
    res.send(productsCollection);
})
app.get("/product/:id", (req, res) =>{
    const Id = req.params.id;
    const getSingleItem = productsCollection?.find((p) => p.id ==Id);
    if(!getSingleItem){
        res.send("khuje pai nai")
    }
    res.send(getSingleItem);
});

app.get("/category/:name", (req, res) =>{
    const name = req.params.name;
    const getCategory = productsCollection?.filter((p) => p.category == name);
    res.send(getCategory);
})

app.listen(Port, () =>{
    console.log('server is running', Port);
})
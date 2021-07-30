const express = require ('express');
const routes = express.Router();
const path = require ("path");


routes.get('/',(req,res)=>{
    res.sendFile(__dirname + "/views/home.html");

});


routes.get('/home',(req,res)=>{
    res.sendFile(path.resolve("views","home.html"));

});

routes.get('/manutencao',(req,res)=>{
    res.sendFile(path.resolve("views","manutencao.html"));

});

routes.get('/blog',(req,res)=>{
    res.sendFile(path.resolve("views","blog.html"));

});

routes.get('/contato',(req,res)=>{
    res.sendFile(path.resolve("views","contato.html"));

});

routes.post("/receber-contato", (req, res) => {
    console.log(req.body);
    res.send("Contato recebido por:" + req.body.nome);
  });

module.exports = routes;
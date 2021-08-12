const express = require ('express');
const routes = express.Router();
const depoimentos = require ("../models/depoimentos");
const path = require ("path");
const produtoController = require ("../controllers/produtoController");
const indexController = require("../controllers/indexController");


routes.get('/', indexController.exibirHome);


routes.get('/home',(req,res)=>{
    res.render("home",{titulo:"Sua empresa vai ser incrivel!"})
    /*res.sendFile(path.resolve("views","home.html"));*/

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

routes.get('/depoimentos',(req,res)=>{
    res.render("depoimentos",{depoimentos,titulo:"depoimentos"});

});

routes.post("/receber-contato", (req, res) => {
    console.log(req.body);
    res.send("Contato recebido por:" + req.body.nome);
  });

module.exports = routes;
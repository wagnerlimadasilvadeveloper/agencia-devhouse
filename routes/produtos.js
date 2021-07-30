const express = require('express');
const routes = express.Router();

routes.get('/produtos/lista',()=>{});

routes.get("/produtos/lista",(req,res)=>{
res.send("Pagina de Produtos")
});

module.exports= routes;


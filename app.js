const express =require ('express');
const rotasDeProdutos = require ("./routes/produtos");
const rotas = require ('./routes');

const app = express();

app.listen(3030,()=>{

    app.use(express.static('public'));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(rotasDeProdutos);
    app.use(rotas);
    
 
    console.log("servidor rodando");
});

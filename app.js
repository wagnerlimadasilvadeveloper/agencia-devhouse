const express =require ('express');
let app = express();
app.listen(3030,()=>{

    app.get('/',(req,res)=>{
        res.send('Seja bem vindo');
    
    });

    app.get('/manutencao',(req,res)=>{
        res.sendFile(__dirname + "/views/manutencao.html");
    
    })
 
    console.log("servidor rodando");
});

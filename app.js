const express =require ('express');
let app = express();
app.listen(3030,()=>{

    app.use(express.static('public'));

    app.get('/',(req,res)=>{
        res.sendFile(__dirname + "/views/home.html");
    
    });
 

    app.get('/home',(req,res)=>{
        res.sendFile(__dirname + "/views/home.html");
    
    });

    app.get('/manutencao',(req,res)=>{
        res.sendFile(__dirname + "/views/manutencao.html");
    
    });

    app.get('/blog',(req,res)=>{
        res.sendFile(__dirname + "/views/blog.html");
    
    });
 
    console.log("servidor rodando");
});

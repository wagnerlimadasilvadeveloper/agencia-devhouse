const express =require ('express');
let app = express();
app.listen(3030,()=>{

    app.use(express.static('public'));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());


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

    app.get('/contato',(req,res)=>{
        res.sendFile(__dirname + "/views/contato.html");
    
    });

    app.post("/receber-contato", (req, res) => {
        console.log(req.body);
        res.send("Contato recebido por:" + req.body.nome);
      });
 
    console.log("servidor rodando");
});

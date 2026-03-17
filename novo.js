const express = require('express');
const app = express();
const PORT = 3001;

app.get ('/numero/:num', (req,res)=>{
    const num = req.params.num
    const conteudo =`<h1>${num}</h1>`
    const conteudo1 = '<h1>'+num+'</h1'>
    
    res.send( conteudo);


});


app.get ('/operacao/:op/:num', (req,res)=>{
     const num = req.params.num
      const op= req.params.op
      let resultado
if( op=== "+"){
    resultado = Number(num)+Number(num)

}

if( op==="*"){
    resultado = num*num
   }
   
 res.send (resultado)


});



app.get ('/marvel', (req,res)=>{
    res.send('Bem-vindo ao universo dos heróis da Marvel!');
});
app.get ('/personagem/:nome', (req,res)=>{
    if(req.params.nome=='hulk'){
        res.send(req.params.nome+'é um herói das Marvel');
    }
    else if(req.params.nome=='Batman'){
        res.send(req.params.nome+' é um herói da dc');
    }
    else if(req.params.nome=="ultron"){
        res.send(req.params.nome+' é um vilão da marvel');
    }
    else if(req.params.nome=="coringa"){
        res.send(req.params.nome+' é um vilão da dc');
    }
    else if(req.params.nome=="wanda"){
        res.send(req.params.nome+' é um herói da marvel');
    }
    else if(req.params.nome=="Superman"){
        res.send(req.params.nome+' é um herói da dc');
    }
    });


app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});
//const express = require('express');
//const app = express();
//const PORT = 3000;

//app.get ('/', (req,res)=>{
  //  res.send('Bem-vindo ao universo dos heróis da Marvel e da DC!');//
//});
//app.get ('/marvel', (req,res)=>{
    //res.send('Bem-vindo ao universo dos heróis da Marvel!');
//});

//app.get ('/dc', (req,res)=>{

const conteudo=`<h1> vai também HTML </h1>
<p> Mais texto </p>
<ul> <li> iTem 1</li>
<li> Item 1 </> <ul>`

    //res.send(conteudo);
//});


//app.get ('/personagem/:nome', (req,res)=>{
   // if(req.params.nome=='hulk'){
        //res.send(req.params.nome+'é um herói das Marvel');
   // }
   // else if(req.params.nome=='Batman'){
   //     res.send(req.params.nome+' é um herói da dc');
    //}
  //  else if(req.params.nome=="ultron"){
        //res.send(req.params.nome+' é um vilão da marvel');
//    }
    //else if(req.params.nome=="coringa"){
       // res.send(req.params.nome+' é um vilão da dc');
    //}
    //else if(req.params.nome=="wanda"){
        //res.send(req.params.nome+' é um herói da marvel');
    //}
    //else if(req.params.nome=="Superman"){
      //  res.send(req.params.nome+' é um herói da dc');
    //}
    //});//


//app.listen(PORT, ()=>{
   // console.log(`Servidor rodando em http://localhost:${PORT}`)//



   const express = require('express');
const app = express();
const PORT = 3000;

app.get ('/numero/:num', (req,res)=>{
    const num = req.params.num
    const conteudo =`<h1>${num}</h1>`
    const conteudo1 = '<h1>'+num+'</h1'>
    
    res.send( conteudo);


});
app.get ('/marvel', (req,res)=>{
    res.send('Bem-vindo ao universo dos heróis da Marvel!');
});

app.get ('/tabela', (req,res)=>{

const conteudo=`<h2> Retornar tabela HTML </h2>
<table border="2">
<tr>
<td>nome</td>
<td>cpf</td>
<td>telefone</td>
</tr>
			<tr>
			<td> jennifer </td>
			<td>09876 </td>
			<td>765543 </td>
            </tr>
            </table>`

    res.send(conteudo);
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
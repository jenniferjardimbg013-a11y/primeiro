const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const html = `
  <div>
  <a href="/camisas">Camisas</a>
  <a href="/bermudas">Bermudas</a>
  <a href="/meias">Meias</a>
  </div>
   `

   res.send(html);
});

app.get('/camisas', (req, res) => {
  const html = `
  <div>
  <a href="/camisas">Camisas</a>
  <a href="/bermudas">Bermudas</a>
  <a href="/meias">Meias</a>
  </div>

  <p>Polo preta: R$30,00. <a href="/camisas/polopreta">Ver mais</a></p>
  <p> Camisa Brasil Nike I 2026/27 Torcedora Pro Feminina: R$100,00. <a href="/camisas/azul">Ver mais</a></p>
   `

   res.send(html);
});

app.get('/camisas/:prod', (req, res) => {


 if (req.params.prod=='polopreta'){
  const html = `
  <div>
  <a href="/camisas">Camisas</a>
  <a href="/bermudas">Bermudas</a>
  <a href="/meias">Meias</a>
  </div>

  <p>Polo preta</p>
  <p>R$30,00</p>
  <p>Tamanhos: P, M, G, GG</p>
   `

   res.send(html);
}

 else if (req.params.prod=='chaves'){
  const html = `
  <div>
  <a href="/camisas">Camisas</a>
  <a href="/bermudas">Bermudas</a>
  <a href="/meias">Meias</a>
  </div>

  <p>Regata do Chaves</p>
  <p>R$100,00</p>
  <p>Tamanhos: P, M, G, GG</p>
   `

   res.send(html);
}
});

app.get('/bermudas', (req, res) => {
  const html = `
  <div>
  <a href="/camisas">Camisas</a>
  <a href="/bermudas">Bermudas</a>
  <a href="/meias">Meias</a>
  </div>

  <p>Bermuda bermuda cargo masculina de sarja azul: R$10,00. <a href="/bermudas/cargo">Ver mais</a></p>
  <p>Bermuda do Harry Potter: R$1000,00. <a href="/bermudas/hp">Ver mais</a></p>
   `

   res.send(html);
});

app.get('/bermudas/:prod', (req, res) => {

  if (req.params.prod=='bonita'){
  const html = `
  <div>
  <a href="/camisas">Camisas</a>
  <a href="/bermudas">Bermudas</a>
  <a href="/meias">Meias</a>
  </div>

  <p>Bermuda bonita</p>
  <p>R$10,00</p>
  <p>Tamanhos: P, M, G, GG</p>
   `

   res.send(html);
  }

  else if (req.params.prod=='hp'){
   const html = `
  <div>
  <a href="/camisas">Camisas</a>
  <a href="/bermudas">Bermudas</a>
  <a href="/meias">Meias</a>
  </div>

  <p> Bermuda cargo masculina com vários bolsos sarja cargo </p>
  <p>R$2000,00</p>
  <p>Tamanhos: P, M, G, GG </p>
   `

   res.send(html);
  }
});

app.get('/meias', (req, res) => {
  const html = `
  <div>
  <a href="/camisas">Camisas</a>
  <a href="/bermudas">Bermudas</a>
  <a href="/meias">Meias</a>
  </div>

  <p>Meia Harry potter: R$15,00. <a href="/meias/potter">Ver mais</a></p>
  <p>Meia do Snoopy: R$30,00. <a href="/meias/nuts">Ver mais</a></p>
   `

   res.send(html);
});

app.get('/meias/:prod', (req, res) => {

  let html = `
  <div>
  <a href="/camisas">Camisas</a>
  <a href="/bermudas">Bermudas</a>
  <a href="/meias">Meias</a>
  </div>`


  if (req.params.prod=='potter'){
  html += 
  `<p>Meia Harry potter</p>
  <p>R$15,00</p>
  <p>Tamanhos: P, M, G, GG</p>
   `

  }
  else if (req.params.prod=='nuts'){
    html += `
    <p>Meia do Snoopy</p>
  <p>R$35,00</p>
  <p>Tamanhos: P, M, G, GG</p>
   `

  }
   res.send(html);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});



const express = require('express')
const {filtrarProfs, encontrarUmProf} = require('./controladores/professores');
const app = express();

const primeiroIntermediario = (req, res, next) =>{
  console.log("Passei no primeiro Intermediario");
  next();
};

const intermediarioDeRota = (req, res, next) =>{
  console.log("Passei no Intermediario da Rota");
  next();
};

// app.use(primeiroIntermediario);


//localhost:3000/professores
app.get('/professores',intermediarioDeRota, filtrarProfs);
//localhost:3000/professores/:id
app.get('/professores/:id', encontrarUmProf);

app.listen(3000, ()=>{
  console.log("http://localhost:3000/")
});
const professores = require('../bancoDeDados')

const filtrarProfs = (req,res)=>{
  const {stack} = req.query
  let resultado = professores;

  console.log("Cheguei no controlador de listagem do professor")
  if(stack){
    resultado = professores.filter((professor)=>{
      return professor.stack === stack
    })
  }
  res.send(resultado)
}

const encontrarUmProf = (req,res)=>{
  console.log("rota para encontrar um professor")
  const professorEncontrado = professores.find((professor)=>{
    return professor.id === Number(req.params.id)
  })
  res.send(professorEncontrado)
}

module.exports = {filtrarProfs,encontrarUmProf}
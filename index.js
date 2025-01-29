const express = require('express')
const handlebars = require ('express-handlebars')
const bodyParser=require('body-parser')
const Usuario = require('./models/formulario');
const User = require('./models/formulario');
const { where } = require('sequelize');


const app=express();

//body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

/*Nesse campo estou informando ao express que irei utilizar o handlebars 
para template para nosso projeto*/  

app.engine('handlebars', handlebars.engine({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');


//rotas
app.get('/',async(req, res)=>{

 const usuarios = await Usuario.findAll()
 // const usuarios = await Usuario.findAll({order: [['id', 'DESC']]});//lista do mais antigo para o mais novo
 //res.json({usuarios:usuarios})
 res.render('home',{usuarios:usuarios})

/*
  Usuario.findAll().then(function(Usuario) {
  res.render('home',{ListaUsuario:ListaUsuario})
}).catch(function(erro){
    res.send("Houve um erro")*/


})

app.get('/listauser',async(req, res)=>{

  const usuarios = await Usuario.findAll()
  res.render('listauser',{usuarios:usuarios})
 
 })

 app.get('/userframe/:id',async(req, res)=>{

  const usuarios = await Usuario.findAll({where:{id:req.params.id}})
  res.render('userframe',{usuarios:usuarios})
 
 })

app.get('/formulario', (req, res) => {
    res.render('formulario');
    
});


app.get('/deletar/:id', (req, res)=>{
  Usuario.destroy({
    where: {
      'id':req.params.id,
    }
}).then(function(){
  res.send("Registro deletado com sucesso!")
}).catch(function(erro){
  res.send("Houve um erro")
})
})

//inserindo informações na tabela.
app.post('/add',function (req, res){
  Usuario.create({
    nome:req.body.nome,
    sobrenome:req.body.sobrenome,
    idade:req.body.idade,
    email:req.body.email 
  }).then(function(){
    res.redirect("/")
  }).catch(function(erro){
    res.send("Houve um erro")
  })
  
})//fim da rota add

app.post('/update/:id',async(req,res)=>{
//inicio
await Usuario.update({
   nome: req.body.nome },
  {
    where: {
      id:req.params.id
   }
  }).then(function(){
    res.send("sucesso")
  }).catch(function(erro){
    res.send("erro")
  })


//fim
 } )

app.listen(3000, function () {
  console.log("App de Exemplo escutando na porta 3000!");
});

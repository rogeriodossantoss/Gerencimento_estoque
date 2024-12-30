const express = require('express')
const handlebars = require ('express-handlebars')
const bodyParser=require('body-parser')
const Usuario = require('./models/formulario');
const User = require('./models/formulario');


const app=express();


//body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


/*Nesse campo estou informando ao express que irei utilizar o handlebars 
para template para nosso projeto*/  

app.engine('handlebars', handlebars.engine({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');


//rotas
app.get('/',(req, res)=>{
//res.render('home',{formulario:"formulario"})

  Usuario.findAll().then(function(Usuario) {
  res.json(Usuario)
})


})

app.get('/formulario', (req, res) => {
    res.render('formulario');
});

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
  
})


app.listen(3000, function () {
  console.log("App de Exemplo escutando na porta 3000!");
});

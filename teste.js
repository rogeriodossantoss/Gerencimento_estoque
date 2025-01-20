const Sequelize = require('sequelize')
const Usuario = require('./models/formulario')
const sequelize = new Sequelize('teste','root','manaus@123',{
    host:"localhost",
    dialect:'mysql'
})

//

//insere informações na tabela

Usuario.create({
    nome:"Rogerio",
    sobrenome:"Santos",
    idade:35,
    email:"rogerio@gmail.com"
})



/*

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Falha ao se conectar"+ erro)
})*/
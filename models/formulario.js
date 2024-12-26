const db=require("./db")

//cria tabela no banco de dados
//Declaração antes da mudança para o modulo 
// const Usuario= sequelize.define ('usuarios',{
    const Usuario= db.sequelize.define ('usuarios',{
    nome:{
        type:db.Sequelize.STRING
    },
    sobrenome:{
        type:db.Sequelize.STRING
    },
    idade:{
        type:db.Sequelize.INTEGER
    },
    email:{
        type:db.Sequelize.STRING
    }
})

module.exports= Usuario
//Usuario.sync({force:true})
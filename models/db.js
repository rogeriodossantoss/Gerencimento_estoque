const Sequelize = require('sequelize')

//Conexão com banco de dados
const sequelize = new Sequelize('sistema','root','manaus@123',{
    host:"localhost",//ip do servidor
    dialect:'mysql',//tipo de banco de dados
    query:{raw:true}//
})



module.exports={
    Sequelize: Sequelize,
    sequelize: sequelize
}


const Sequelize = require('sequelize')

//Conexão com banco de dados
const sequelize = new Sequelize('sistema','root','manaus@123',{
    host:"localhost",
    dialect:'mysql'
})



module.exports={
    Sequelize: Sequelize,
    sequelize: sequelize
}


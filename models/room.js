const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Room extends Model { }
Room.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'room' })

module.exports = Room





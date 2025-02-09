const User = require('./User.js')
const Room = require('./room.js')

User.hasMany(Room, { foreignKey: 'uid' })
Room.belongsTo(User, { foreignKey: 'uid' })

module.exports = { User, Room }

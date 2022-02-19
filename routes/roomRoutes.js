const router = require('express').Router()
const { Room, User } = require('../models')
// require user log in
const passport = require('passport')

// GET all posts
// user must be logged in
router.get('/rooms', passport.authenticate('jwt'), async function (req, res) {
  const rooms = await Room.findAll({ include: [User] })
  res.json(rooms)
})

// POST one post
router.post('/rooms', passport.authenticate('jwt'), async function ({ body, user }, res) {
  const room = await Room.create({
    ...name,
    uid: user.id
  })
  res.json(room)
})

// DELETE one post
//user must be logged in
router.delete('/rooms/:id', passport.authenticate('jwt'), async function ({ params: { id } }, res) {
  await Room.destroy({ where: { id } })
  res.sendStatus(200)
})

module.exports = router

// const express = require('express');
// const User = require('./userModel');
// const router = express.Router();

// const authenticateUsername = (req, res, next) => {
//   if (req.body.username) {
//     User
//       .find({ username: req.body.username })
//       .then(user => user.length === 0 ? next() : res.send("that username is already in use."))
//       .catch(err => res.send("error authenticating username"))
//   } else { res.send("must provide a username") }
// }

// const authenticatePW = (req, res, next) => {
//   req.body.password ? next() : res.send("you must provide a password")
// }

// router.route('/users')
//   .get((req, res) => {
//     User
//       .find()
//       .then(users => res.status(200).json(users))
//       .catch(err => res.status(500).json("error fetching users"))
//   })

// router.route('/register')
//   .post(authenticateUsername, authenticatePW, (req, res) => {
//     User
//       .create(req.body)
//       .then(user => res.status(201).json(user))
//       .catch(err => res.status(400).json({ error: "There was a problem creating this user." }))
//   })

// router.route('/login')
//   .post((req, res) => {
//     const { username, password } = req.body;
//     User
//       .find({ username, password })
//       .then(result => {
//         if (result.length === 1) {

//         } else {
//           res.send('invalid login credentials')
//         }
//       })
//       .catch(err => res.send('error'))
//   })

// module.exports = router;
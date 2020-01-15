const express = require('express');

const router = express.Router();

const Users = require('./userDb.js')

//POST all users (insert()) MAYBE?????
router.post('/', (req, res) => {
  // do your magic!
});

//POST new post by user (insert()) MAYBE????
router.post('/:id/posts', (req, res) => {
  // do your magic!
});

//GET all users (get())
router.get('/', (req, res) => {
  // do your magic!
  Users.get()
    .then(users => {
      res.status(201).json(users)
    })
    .catch(err => {
      console.log('error getting users', err)
      res.status(500).json({ errorMessage: "The users information could not be retrieved."})
    })

});

//GET user by id (getById())
router.get('/:id', (req, res) => {
  // do your magic!
  const id = req.params.id;
  Users.getById(id)
    .then(user => {
      if (!user) {
        res.status(404).json({errorMessage: "The post with the specified ID does not exist."})
      } else {
        res.status(200).json({user})
      }
    })
    .catch(err => {
      console.log('error getting specified user', err)
      res.status(500).json({ errorMessage: 'The user information could not be retrieved. '})
    })
});

//GET posts by user id (getUserPosts())
router.get('/:id/posts', (req, res) => {
  // do your magic!
  const id = req.params.id;
  Users.getUserPosts(id)
    .then(posts => {
      if (posts.length === 0) {
        res.status(404).json({ message: "The posts with the specified ID does not exist. "})
      } else {
        res.status(200).json({posts})
      }
    })
    .catch(err => {
      console.log('error getting posts for this user id', err)
      res.status(500).json({ errorMessage: 'The posts information could not be retrieved.' })
    })
});

//DELETE user by id (remove())
router.delete('/:id', (req, res) => {
  // do your magic!
});

//PUT edits user info by id (update())
router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;

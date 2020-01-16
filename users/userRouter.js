const express = require('express');

const router = express.Router();

const Users = require('./userDb.js');
const Post = require('../posts/postDb.js');

//POST new user to all users (insert()) MAYBE?????
router.post('/', (req, res) => {
  // do your magic!
  const newUser = req.body;
  if(newUser.name.length === 0) {
    res.status(400).json({ message: 'Please provide a name for this user. ' })
  } else {
    Users.insert(newUser)
    .then(newU => {
      res.status(201).json({newU})
    })
    .catch(err => {
      console.log('error creating a new user', err)
      res.status(500).json({ errorMessage: 'There was an error while saving the user to the database.' })
    })
  }
  
});

//POST new post by user (insert()) MAYBE????
router.post('/:id/posts', (req, res) => {
  // do your magic!
  const newPost = req.body;
  const user_id = req.params.id;
  const newObj = {text: newPost.text, user_id}

  Post.insert(newObj)
    .then(newP => {
      if (newP.text.length === 0) {
        res.status(400).json({ message: 'Please provide text for the post.' })
      } else {
        res.status(201).json({newPost})
      }
    })
    .catch(err => {
      console.log('error creating new post', err)
      res.status(500).json({ errorMessage: 'There was an error while saving the post to the database.' })
    })

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
  const id = req.params.id;
  Users.remove(id)
    .then(deleted => {
      res.status(200).json({ message: 'User has been successfully deleted.' })
    })
    .catch(err => {
      console.log('error in delete', err)
      res.status(500).json({ errorMessage: 'The post could not be removed.' })
    })
  
});

//PUT edits user info by id (update())
router.put('/:id', (req, res) => {
  // do your magic!
  const id = req.params.id;
  const updateUser = req.body;
 
    if (!id ) {
      res.status(404).json({ message: 'Please provide a valid user.'})
    } else {
      Users.update(id, updateUser)
      .then(upU => {
        console.log(upU)
        res.status(204).json({count: upU})
      })
      .catch(err => {
        console.log('error updating user', err)
        res.status(500).json({ errorMessage: 'The users information could not be modified.' })
      })
    }
    
  

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

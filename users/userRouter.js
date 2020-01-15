const express = require('express');

const router = express.Router();

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
});

//GET user by id (getById())
router.get('/:id', (req, res) => {
  // do your magic!
});

//GET posts by user id (getUserPosts())
router.get('/:id/posts', (req, res) => {
  // do your magic!
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

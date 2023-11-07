// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// Get all comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get specific comment
router.get('/:commentId', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId);
        res.json(comment);
    } catch (err) {
        res.json({ message: err });
    }
});

// Post comment
router.post('/', async (req, res) => {
    const comment = new Comment({
        text: req.body.text,
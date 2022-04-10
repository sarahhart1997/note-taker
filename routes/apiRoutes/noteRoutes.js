// Core Setup
const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

// reads db and returns all saved notes
router.get('/notes', (req, res) => {
    res.json(notes)
});

// Post function creates new id number
router.post('/notes', (req, res) => {
    // req.body something to define title, text, id
    // puts note in JSON format
    res.json(note);
});


// exports module 
module.exports = router;
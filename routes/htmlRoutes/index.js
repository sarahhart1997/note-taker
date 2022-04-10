// initialize variables
const path = require('path');
const router = require('express').Router();

// send file to notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// send file to index.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// export router
module.exports = router;
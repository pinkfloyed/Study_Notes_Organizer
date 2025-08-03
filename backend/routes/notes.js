const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  getNotes,
  addNote,
  updateNote,
  deleteNote,
  searchNotes
} = require('../controllers/notesController');

router.get('/', auth, getNotes);
router.post('/', auth, addNote);
router.put('/:id', auth, updateNote);
router.delete('/:id', auth, deleteNote);
router.get('/search', auth, searchNotes);

module.exports = router;

const db = require('../config/db');

exports.getNotes = async (req, res) => {
  try {
    const [notes] = await db.execute('SELECT * FROM notes WHERE user_id = ?', [req.user.id]);
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addNote = async (req, res) => {
  const { title, content, category, tags } = req.body;
  if (!title || !content)
    return res.status(400).json({ message: 'Title and content are required' });

  try {
    await db.execute(
      'INSERT INTO notes (user_id, title, content, category, tags) VALUES (?, ?, ?, ?, ?)',
      [req.user.id, title, content, category || '', tags || '']
    );
    res.status(201).json({ message: 'Note created' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateNote = async (req, res) => {
  const { title, content, category, tags } = req.body;
  const noteId = req.params.id;

  try {
    const [result] = await db.execute(
      'UPDATE notes SET title = ?, content = ?, category = ?, tags = ?, updated_at = NOW() WHERE id = ? AND user_id = ?',
      [title, content, category || '', tags || '', noteId, req.user.id]
    );

    if (result.affectedRows === 0) return res.status(404).json({ message: 'Note not found' });

    res.json({ message: 'Note updated' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteNote = async (req, res) => {
  const noteId = req.params.id;

  try {
    const [result] = await db.execute('DELETE FROM notes WHERE id = ? AND user_id = ?', [
      noteId,
      req.user.id
    ]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Note not found' });

    res.json({ message: 'Note deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.searchNotes = async (req, res) => {
  const query = req.query.query || '';
  try {
    const [notes] = await db.execute(
      'SELECT * FROM notes WHERE user_id = ? AND (title LIKE ? OR content LIKE ? OR category LIKE ? OR tags LIKE ?)',
      [req.user.id, `%${query}%`, `%${query}%`, `%${query}%`, `%${query}%`]
    );
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

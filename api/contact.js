const connectToDatabase = require('./_mongodb');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) {
      res.status(400).json({ error: 'name, email and message are required' });
      return;
    }

    const { db } = await connectToDatabase();
    const col = db.collection('messages');
    const result = await col.insertOne({ name, email, message, createdAt: new Date() });
    res.status(201).json({ success: true, id: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

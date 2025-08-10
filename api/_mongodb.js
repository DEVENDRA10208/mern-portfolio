const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error('MONGODB_URI environment variable is required');

let cached = global._mongoCache || (global._mongoCache = { conn: null, promise: null });

async function connectToDatabase() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    cached.promise = client.connect().then(client => {
      return {
        client,
        db: client.db(process.env.MONGODB_DB || 'portfolio')
      };
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

module.exports = connectToDatabase;

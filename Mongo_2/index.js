import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('MONGODB_URI is missing. Start the app with: npm start');
}

const client = new MongoClient(process.env.MONGODB_URI);
const DATABASE_NAME = 'sample_airbnb';
const COLLECTION_NAME = 'listingsAndReviews';

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    const collection = client.db(DATABASE_NAME).collection(COLLECTION_NAME);
    const pipeline = [
  {
    '$match': {
      'accommodates': {
        '$gt': 4
      }, 
      'price': {
        '$lt': 500
      }, 
      'amenities': 'Hair dryer'
    }
  }, {
    '$sort': {
      'price': 1
    }
  }, {
    '$project': {
      'name': 1, 
      'amenities': 1, 
      'price': 1, 
      'description': 1
    }
  }, {
    '$limit': 20
  }
]

    const agg = await collection.aggregate(pipeline).toArray();
    console.dir(agg, { depth: null });
    return agg;

  } catch (err) {
    console.dir(err);
  }
}

// Call this only when your application terminates
export async function disconnectFromMongoDB() {
  await client.close();
}

connectToMongoDB()
  .then(() => disconnectFromMongoDB())
  .catch(console.error);

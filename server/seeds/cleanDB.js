const User = require('../models/User'); // Import the User model
const Game = require('../models/Game'); // Import the Game model
const db = require('../config/connection'); // Import your MongoDB connection

module.exports = async (modelName, collectionName) => {
  try {
    // Choose the appropriate model based on modelName
    const model = modelName === 'User' ? User : Game;

    // Check if the collection exists in the database
    const collectionExists = await model.db.db.listCollections({
      name: collectionName
    }).toArray();

    if (collectionExists.length) {
      // If the collection exists, drop it
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err; // Throw any errors that occur
  }
};
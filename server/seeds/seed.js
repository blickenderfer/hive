const db = require("../config/connection");
const { Game, Trophy, Review } = require("../models"); // Import your models
const cleanDB = require("./cleanDB");

const gameData = require("./gameData.json");
const trophyData = require("./trophyData.json");
const reviewData = require("./reviewData.json");

db.once("open", async () => {
  try {
    // Clean the collections using cleanDB function
    await cleanDB("Game", "games");
    await cleanDB("Trophy", "trophies");
    await cleanDB("Review", "reviews");

    // Insert data into the collections
    await Game.insertMany(gameData);
    await Trophy.insertMany(trophyData);
    await Review.insertMany(reviewData);

    console.log("Data seeded!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
});

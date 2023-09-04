

const { Profile, Game, Trophy, Review } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const axios = require('axios');
require('dotenv').config()

const resolvers = {
  Query: {
    userProfile: async (_, { username, password }) => {
      try {
        const user = await Profile.findOne({ username })
          .populate('games')
          .populate('reviews.game');
        console.log(JSON.stringify(user, null, 2));
        return user;
      } catch (error) {
        throw error;
      }
    },
    me:

      async (_, args, context) => {
        const userId = context._id
        console.log(userId);
        const profile = await Profile.findById(userId);
        return profile
      },


    // this one is the one that works so far showing results. 
    getVideoGames: async (_, { title }) => {
      const url = `https://rawg.io/api/games?search=${title}&key=246f9b92ca5c44d7bf1c561cf74089fc`
      try {
        const response = await axios.get(url);
        // response.data.results[0].name
        let allGames = []
        for (let i = 0; i < response.data.results.length; i++) {
          const game = {
            id: response.data.results[i].id,
            title: response.data.results[i].name,
            released: response.data.results[i].released,
            platforms: response.data.results[i].platforms,
            genres: response.data.results[i].genres,
            image_background: response.data.results[i].image_background
          }
          console.log(response.data.results[i])
          allGames.push(game)
        }
        console.log(response.data);
        console.log(JSON.stringify(allGames, null, 2));
        return allGames;
      } catch (error) {
        console.error(error);
      }
    },

    //need to retool to work w/the api
    game: async (_, { _id }) => {
      try {
        const game = await Game.findById(_id);
        return game;
      } catch (error) {
        throw error;
      }
    },

    /**/
    getFavorites: async (_, args, context) => {
      const userId = context._id
      console.log(userId);
      const profile = await Profile.findById(userId);
      return profile.games
    }

  },

  Mutation: {
    deleteGame: async (parent, { _id }, context) => {
      // console.log("delete game", context)
      if (context._id) {
        const updatedProfile = await Profile.findOneAndUpdate(
          { _id: context._id },
          { $pull: { games: { _id: _id } } },
          { new: true }
        );
        const user = await Profile.findOne({ _id: context._id })
          .populate('games')
          .populate('reviews.game');
        return user;
      }

    },
    //add a review to a specific game
    addReview: async (parent, { _id, text }, context) => {

      if (context._id) {

        const user = await Profile.findOne({ _id: context._id });

        console.log("review", user.games);

        for (let i = 0; i < user.games.length; i++) {
          console.log(_id, user.games[i]._id.valueOf())
          if (_id === user.games[i]._id.valueOf()) {
            user.games[i].review = text
          }
        }

        console.log(user.games)

        const updatedProfile = await Profile.findOneAndUpdate(
          { _id: context._id },
          { games: user.games },
          { new: true }
        );

        return updatedProfile;
      }

    },
    //save game
    saveToFavorites: async (parent, { id, title, released }, context) => {
      const userId = context.email;
      console.log("resolver save to favorites", id, title, released)
      console.log("in resolove", context)
      const user = await Profile.findOneAndUpdate({ email: userId }, {
        $push: {
          games: {
            gameId: id,
            title: title,
            released: released
          }
        }
      })
      console.log(user);
      return user;
    },

    //create new user
    addUser: async (parent, { username, email, password }) => {
      const newUser = await Profile.create({ username, email, password })
      const token = signToken(newUser);
      return { token, newUser };

    },
    // Checks username and password validation. 
    login: async (parent, { email, password }, context) => {

      console.log("login", context)
      console.log({ email, password })
      const profile = await Profile.findOne({ email: email });
      console.log(1, profile)
      if (!profile) {
        throw AuthenticationError;
      }


      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw Error;
      }

      console.log(2)

      const token = await signToken(profile);
      console.log({ token, profile })
      return { token, user: profile };
    },
  },
};

module.exports = resolvers;


//finish this? my brain small 
// const { Profile } = require('../models/Profile');
//api key 68eb0690763d46b0b8c318062068f9bb

const { Profile, Game, Trophy, Review } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const axios = require('axios');
require('dotenv').config()
// console.log(process.env.REACT_APP_API_KEY)
//url to search api for games 
// const apiOptions = {
//   method: 'GET',
//   url: 'https://rawg-video-games-database.p.rapidapi.com/games',
//   headers: {
//     'Content-Type': 'application/json',
//     'X-rapid-api-Key': '68eb0690763d46b0b8c318062068f9bb',
//     'X-rapid-api-Host': 'rawg-video-games-database.p.rapidapi.com' 
//   }
// };

const resolvers = {
  Query: {
    userProfile: async (_, { username, password }) => {

      //cross reference password and fail if it doesn't match

      try {
        const user = await Profile.findOne({ username })
          .populate('games')
          // .populate('trophies')
          .populate('reviews.game');
        console.log(user);
        return user;
      } catch (error) {
        throw error;
      }
    },
    me: async (parent, args, context) => {
      console.log(context.user)
      if (context.user) {
        const userData = await Profile.findOne({ _id: context.user._id })
        return userData
      } throw AuthenticationError
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

      // const userId = "64ebdaa2369fd8c7546b0767";
      const userId = context._id

      console.log(userId);

      const profile = await Profile.findById(userId);

      return profile.games

    }

  },

  Mutation: {

    // saveGame: async (parent, { gameData }, context) => {
    //   if (context.user) {
    //     const updatedUser = await Profile.findByIdAndUpdate(
    //       { _id: context.user._id },
    //       { $push: { games: gameData } },
    //       { new: true }
    //     );
    //     return updatedUser;
    //   }
    //   throw AuthenticationError
    // },
    //old savegame mutation 
    // saveGame: async (parent, { gameData }, context) => {
    //   console.log(context);
    //   console.log(gameData);
    //   const result = await Profile.findByIdAndUpdate(context.user._id, {
    //     ["$push"]: {
    //       games: { gameData }
    //       }
    //     }
    //   );
    //   return result;
    // }, 

    deleteGame: async (parent, { gameId }, context) => {
      console.log("delete game", context)
      if (context.user) {
        const updatedProfile = await Profile.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { games: { gameId } } },
          { new: true }
        );
        return updatedProfile;
      }

    },
    saveToFavorites: async (parent, { id, title, released }, context) => {
      //64ebdaa2369fd8c7546b0767
      console.log(context._id);
      const userId = context.email;

      console.log("resolver save to favorites", id, title, released)

      console.log("in resolove", context)
      const user = await Profile.findOneAndUpdate({email: userId}, {
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


    addUser: async (parent, { username, email, password }) => {
      const newUser = await Profile.create({ username, email, password })
      const token = signToken(newUser);
      return { token, newUser };

    },
    // Update a user's profile information
    /*
    updateProfile: async (parent, { input }, { dataSources }) => {
 
      const updatedProfile = await dataSources.profileAPI.updateProfile(input);
      return updatedProfile;
    }, */
    // Checks username and password validation. 
    login: async (parent, { email, password }, context) => {

      console.log("login", context)
      console.log({ email, password })
      const profile = await Profile.findOne({ email: email });
      console.log(1, profile)
      if (!profile) {
        throw AuthenticationError;
      }

      // const correctPassword = user.verifyPassword(password);

      // if (!correctPassword) {
      //   throw new Error('Incorrect password');
      // }

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


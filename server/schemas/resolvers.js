//finish this? my brain small 
// const { Profile } = require('../models/Profile');
//api key 68eb0690763d46b0b8c318062068f9bb
const { Profile, Game, Trophy, Review } = require('../models');
const { signToken, AuthenticationError} = require('../utils/auth');
const axios = require('axios');
require('dotenv').config()

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
    userProfile: async (_, { username }) => {
      try {
        const user = await User.findOne({ username })
          .populate('games')
          .populate('trophies')
          .populate('reviews.game');
        return user;
      } catch (error) {
        throw error;
      }
    },
    // this one is the one that works so far showing results. 
    getVideoGames: async (_, { title }) => {
      const url= `https://rawg.io/api/games?search=${title}&key=246f9b92ca5c44d7bf1c561cf74089fc`
      try {
        const response = await axios.get(url);
        // response.data.results[0].name
        let allGames = []
        for (let i = 0; i < response.data.results.length; i++ ){
          const game = {
            title: response.data.results[i].name,
            released: response.data.results[i].released,
            platforms : response.data.results[i].platforms,
            genres: response.data.results[i].genres, 
          }
          allGames.push(game)
        }
        console.log(response.data);
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
  },
//  game search w/api ver. 0.5
//  testing w/the api key to search for a game using a search bar function added in the front end. 


//  game: async (_, { _id }) => {
//  try {
//        const response = await axios.request(apiOptions);
//          console.log(response.data);
//} catch (error) {
//  console.log(error);
//}
//}


  Mutation: {
    addUser: async (parent, {username, email, password}) => {
      const newUser = await Profile.create({username, email, password})
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
    login: async (parent, { email, password }) => {
      console.log({email, password})
      const user = await Profile.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }

      // const correctPassword = user.verifyPassword(password);
      
      // if (!correctPassword) {
      //   throw new Error('Incorrect password');
      // }

      const correctPw = await user.isCorrectPassword(password);

       if (!correctPw) {
        throw Error;
      }

      const token = signToken(user);
      console.log({ token, user })
      return { token, user };
    },
  },
};

module.exports = resolvers;


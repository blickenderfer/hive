//finish this? my brain small 
// const { Profile } = require('../models/Profile');
const { Profile, Game, Trophy, Review } = require('../models');
const { signToken, AuthenticationError} = require('../utils/auth');

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
    game: async (_, { _id }) => {
      try {
        const game = await Game.findById(_id);
        return game;
      } catch (error) {
        throw error;
      }
    },
  },
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
      const user = await Profile.findOne({ email });
      if (!user) {
        throw new AuthenticationError('User not found');
      }

      const correctPassword = user.verifyPassword(password);
      if (!correctPassword) {
        throw new AuthenticationError('Incorrect password');
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;


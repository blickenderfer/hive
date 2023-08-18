//finish this? my brain small 
const { Profile } = require('../models/Profile');
const { signToken, AuthenticationError} = require('../utils/auth');

const resolvers = {
    Query: {
    // Fetch a user's profile by their username
    profile: async (parent, { username }, { dataSources }) => {
      const profile = await dataSources.profileAPI.getProfileByUsername(username);
      return profile;
    },
  },
  Mutation: {
    // Update a user's profile information
    updateProfile: async (parent, { input }, { dataSources }) => {
      const updatedProfile = await dataSources.profileAPI.updateProfile(input);
      return updatedProfile;
    },
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


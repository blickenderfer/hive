//import { gql } from '@apollo/client';
//const { gql } = require('@apollo/client')

const typeDefs = `#graphql
type User {
    _id: String
    username: String
    email: String
    games: [Game]
    # trophies: [Trophy]
    reviews: [Reviews]
    # friends: [User]
}

type Auth {
    token: ID!
    user: User
}

type Game {
    gameId: ID!
    title: String
    released: String
    genre: String
    platforms: String
}

type Trophy {
    _id: ID
    title: String
    description: String
    earnedDate: String
}

type Reviews {
    reviewId: ID
    body: String
    game: Game
}


type API_games {

    id: ID
    title: String
    released: String
    platforms: [Platform]
    genres: [Genre]
    image_background: String
}

type Platform {
    platform: PlatformData
}
type PlatformData {
    id: Int
    name: String
    slug: String
}
type Genre {
    id: Int
    name: String
    slug: String
}

type Query {
    userProfile(username: String): User
    game(_id: ID): Game
    getVideoGames(title: String): [API_games]
    me: User
    getFavorites: [Game]
}

input gameInput {
    gameId: ID!
    title: String
    released: String
    genre: String
    platforms: String
} 


type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    deleteGame(gameId: String!, title: String, released: String, genre: String, platforms: String): User
    addTrophy(username: String!, trophy: ID!): User
    addReview(reviewId: String!, game: ID!, body: String!): Reviews
    # also going to need a delete review mutation
    addFriend(username: String!, friendUsername: String!): User
    saveToFavorites(id: ID, title: String, released: String): User
  }
`


module.exports = typeDefs
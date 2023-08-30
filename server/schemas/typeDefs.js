//import { gql } from '@apollo/client';
//const { gql } = require('@apollo/client')

const typeDefs = `#graphql
type User {
    _id: ID
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
    gameId: ID
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
    _id: ID
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
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addGame(username: String!, game: ID!): User
    saveGame(gameId: String!, title: String, released: String, genre: String, platforms: String): User
    addTrophy(username: String!, trophy: ID!): User
    writeReview(username: String!, game: ID!, body: String!): Reviews
    addFriend(username: String!, friendUsername: String!): User
  }
`


module.exports = typeDefs
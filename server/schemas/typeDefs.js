//for app do we want to save games to a fave list or just save reviewed games?
//check out context, don't need some mutations :(
//add remove game/friend/review functionality 
const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String 
    games: [Game]
    trophies: [Trophy]
    reviews: [Reviews]
    friends: [User]
}

type Auth {
    token: ID!
    user: User
}

type Game {
    _id: ID
    name: String
    developers: String
    genres: String
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

type Query {
    userProfile(username: String): User
    game(_id: ID): Game
}

type Mutation {
    signup(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addGame(username: String!, game: ID!): User
    addTrophy(username: String!, trophy: ID!): User
    writeReview(username: String!, game: ID!, body: String!): Review
    addFriend(username: String!, friendUsername: String!): User
  }
`


module.exports = typeDefs
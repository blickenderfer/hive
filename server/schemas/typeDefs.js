const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    # games: [Game]
    # trophies: [Trophy]
    # reviews: [Reviews]
    # friends: [User]
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


type API_games {
    title: String
    released: String
    platforms: String
    genres: String
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
    addTrophy(username: String!, trophy: ID!): User
    writeReview(username: String!, game: ID!, body: String!): Reviews
    addFriend(username: String!, friendUsername: String!): User
  }
`


module.exports = typeDefs
//Future development would be adding trophies to a users profile, as well as a friends list
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
    _id: ID
    title: String
    released: String
    genre: String
    platforms: String
    review: String
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
    deleteGame(_id: String!): User
    addReview(_id: String!, text: String): User
    addTrophy(username: String!, trophy: ID!): User
    # also going to need a delete review mutation
    addFriend(username: String!, friendUsername: String!): User
    saveToFavorites(id: ID, title: String, released: String): User
  }
`


module.exports = typeDefs
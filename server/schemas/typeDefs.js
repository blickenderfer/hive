//for app do we want to save games to a fave list or just save reviewed games?
//check out context, don't need some mutations :(
//add remove game/friend/review functionality 
const typeDefs = `
type Profile {
    _id: ID
    name: String
    email: String
    password: String 
    games: [Game]
    friends: [save id of friends here? Google?]
    reviews: [Reviews]
}

type Auth {
    token: ID!
    profile: Profile
}

type Game {
    _id: ID
    name: String
    developers: String
    genres: String
}

type Reviews {
    _id: ID
    body: String
    add comments later?
}

type Query {
    profiles: [Profile]!
    profile(profileID: ID!): Profile
}

type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    
    addFriend(ProfileId: ID!): Profile
    addGame(profileId: ID!, game: (gameId: game!)): Profile
    addReview(ProfileId: ID!, reviewId: ID!): Profile
}
`

module.exports = typeDefs
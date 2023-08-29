
import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      email
      username
      _id
    }
    token
  }
}
`
export const SIGNUP_USER = gql`
mutation addUser($email: String!, $username: String!, $password: String!) {
  addUser(email: $email, username: $username, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}
`

export const SAVE_GAME = gql `
mutation Mutation($gameId: String!, $title: String, $released: String, $genre: String, $platforms: String) {
  saveGame(gameId: $gameId, title: $title, released: $released, genre: $genre, platforms: $platforms) {
    games {
      gameId
      genre
      platforms
      released
      title
    }
    email
  }
}
`



// export const ADD_REVIEW = gql`
// mutation writeReview($username:String!, $game: ID!, $body: String!) {
//   writeReview(username: $username, game: $ID, body: $body) {

//   }
// }
// `
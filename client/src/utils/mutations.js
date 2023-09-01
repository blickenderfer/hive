
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

export const SAVE_GAME = gql`
mutation Mutation($saveToFavoritesId: ID, $title: String, $released: String) {
  saveToFavorites(id: $saveToFavoritesId, title: $title, released: $released) {
    _id
    email
  }
}
`

export const DELETE_GAME = gql`
mutation DeleteGame($_id: String!) {
  deleteGame(_id: $_id) {
    games {
      _id
    }
  }
}
`



// export const ADD_REVIEW = gql`
// mutation writeReview($username:String!, $game: ID!, $body: String!) {
//   writeReview(username: $username, game: $ID, body: $body) {

//   }
// }
// `
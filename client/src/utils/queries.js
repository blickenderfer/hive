//maybe put api query here? Or in both? Talk to instructors in class 2 figure it out
//make a query to search for games Api($title: String) { api(title: $title){title}}
import { gql } from '@apollo/client';


export const QUERY_ME = gql`
query me {
  me {
    _id
    email
    games {
      gameId
    }
    username
  }
}
`

export const QUERY_PROFILE = gql`
query UserProfile($username: String) {
  userProfile(username: $username) {
    games {
      title
    }
    username
  }
}`

// export const QUERY_PROFILE = gql`
// query profile {

// }`



export const ALL_GAMES = gql`
query getVideoGames($title: String) {
  getVideoGames(title: $title) {
    id
    title
    released
    platforms {
      platform{
        name
      }
    }
    genres {
      name
    }
    image_background
  }
}
`
//need to add get review for single reviews (when someone looks at a single game page) and get all reviews (for someones profile)
//maybe for now just work on get all reviews for a users profile and a single review query can be done later?
// export const GET_REVIEW = gql`

export const GET_FAV = gql`
query GetFavorites {
  getFavorites {
    released
    title
  }
}
`

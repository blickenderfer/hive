//maybe put api query here? Or in both? Talk to instructors in class 2 figure it out
//make a query to search for games Api($title: String) { api(title: $title){title}}
import { gql } from '@apollo/client';

// export const QUERY_ME = gql`
// query me {
//     me {
//       _id
//       username
//       email
//       bookCount
//       savedGames {
//         bookId
//         authors
//         description
//         image
//         link
//         title
//       }
//     }
//   }
// `

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

// export const ADD_REVIEW = gql`
// mutation writeReview($reviewData: ReviewInput!) {

// }`

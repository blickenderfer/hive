//maybe put api query here? Or in both? Talk to instructors in class 2 figure it out
//make a query to search for games Api($title: String) { api(title: $title){title}}
import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me {
    me {
      _id
      username
      email
      bookCount
      savedGames {
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
`



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

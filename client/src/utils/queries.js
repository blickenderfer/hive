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
query ExampleQuery($title: String) {
  userProfile {
    _id
  }
  getVideoGames(title: $title) {
    released
    title
    platforms {
      platform {
        id
        name
        slug
      }
    }
    genres {
      id
      name
      slug
    }
  }
}
`
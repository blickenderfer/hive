//maybe put api query here? Or in both? Talk to instructors in class 2 figure it out
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

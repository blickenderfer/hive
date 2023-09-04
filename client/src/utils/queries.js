import { gql } from '@apollo/client';


export const QUERY_ME = gql`
query me {
  me {
    _id
    email
    # games {
    #   gameId
    # }
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
export const GET_FAV = gql`
query GetFavorites {
  getFavorites {
    _id
    released
    title
    review
  }
}
`

import {gql} from '@apollo/client'
export const LOGIN_USER = gql `
mutation login($email: String!
    $password: String!
    ) {
        login(email:$email
            password: $password
            )
            {
                token
                User {
                    _id
                    email
                }
            }
    }
`;

import {gql} from '@apollo/client'
export const SIGNUP_USER = gql `
mutation login($email: String!
    $password: String!
    ) {
        login(email:$email
            password: $password
            )
            {
                token
                User {
                    _id
                    email
                }
            }
    }
`;

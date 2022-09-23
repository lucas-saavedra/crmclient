import { gql } from "@apollo/client";
export const ADD_USER = gql`
mutation($userPayload: UserInput!) {
    addUser(userPayload: $userPayload) {
      name
      lastname
      email
      id
    }
  }
  `
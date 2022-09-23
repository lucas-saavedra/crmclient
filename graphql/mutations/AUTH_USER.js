import { gql } from "@apollo/client";

export const AUTH_USER = gql`
mutation($authPayload: AuthInput!) {
    authUser(authPayload: $authPayload) {
      token
    }
  }  
`
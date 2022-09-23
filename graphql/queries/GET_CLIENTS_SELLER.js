import { gql } from "@apollo/client";

export const GET_CLIENTS_SELLER = gql`
query {
  getClientsSeller {
      name
      id
      lastname
      email
      organization
      phone,
      createdAt,
      updatedAt
    }
  }
  `
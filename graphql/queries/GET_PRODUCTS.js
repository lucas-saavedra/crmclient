import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
query GetProducts {
    getProducts {
      id
      name
      stock
      price
      createdAt
      updatedAt
    }
  }
`
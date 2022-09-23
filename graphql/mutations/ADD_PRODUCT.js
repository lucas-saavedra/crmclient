import { gql } from "@apollo/client";

export const ADD_PRODUCT = gql`
mutation($input: ProductInput!) {
    addProduct(input: $input) {
      id
      name,
      price,
      stock,
      createdAt,
      updatedAt
    }
  }
`
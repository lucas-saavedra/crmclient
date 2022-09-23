import { gql } from "@apollo/client";

export const UPDATE_PRODUCT = gql`
mutation UpdateProduct($id: ID!, $payload: ProductInput) {
    updateProduct(id: $id, payload: $payload) {
      id
      name
      stock
      price
      createdAt
      updatedAt
    }
  }
  
`
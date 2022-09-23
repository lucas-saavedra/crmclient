import { gql } from "@apollo/client";

export const DELETE_PRODUCT = gql`
mutation Mutation($id: ID!) {
    deleteProduct(id: $id)
  }`
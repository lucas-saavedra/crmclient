import { gql } from "@apollo/client";

export const UPDATE_CLIENT = gql`
  mutation UpdateClientId($id: ID!, $payload: ClientInput) {
    updateClient(id: $id, payload: $payload) {
      id
      name
      lastname
      email
      organization
      phone
      createdAt
      updatedAt
    }
  }
`;

import { gql } from "graphql-tag";

export const getProductById = gql`
  query GetProductById($id: Int!) {
    product(id: $id) {
      id
      name
      description
      price
      image
      brand
    }
  }
`;

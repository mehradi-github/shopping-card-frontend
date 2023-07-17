import gql from "graphql-tag";

export const getProductById = gql`
  query GetProductById($id: Int!) {
    product(id: $id) {
      brand
      createAt
      description
      id
      image
      price
      updateAt
    }
  }
`;

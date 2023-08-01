import { graphql } from "../gql";

const getProductById = graphql(`
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
`);

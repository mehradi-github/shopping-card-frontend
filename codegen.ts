import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:3002/graphql",
  documents: ["src/graphql/client/**/*.{ts,tsx}"],
  ignoreNoDocuments: true,
  generates: {
    "./src/graphql/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;

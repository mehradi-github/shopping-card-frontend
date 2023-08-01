import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:3002/graphql",
  documents: ["src/**/*.{ts,tsx}"],
  ignoreNoDocuments: true,
  generates: {
    "./gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;

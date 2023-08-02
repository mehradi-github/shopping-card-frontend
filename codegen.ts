import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:3002/graphql",
  documents: ["src/lib/graphql/client/**/*.{ts,tsx}"],
  ignoreNoDocuments: true,
  generates: {
    "./src/lib/graphql/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;

import { GraphQLSchema, GraphQLObjectType } from "graphql";

import fields from "./fields";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields
  })
});

export default schema;

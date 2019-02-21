import { GraphQLString } from "graphql";

export default {
  hello: {
    type: GraphQLString,
    resolve() {
      return "world";
    }
  }
};

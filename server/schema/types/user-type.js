const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const UserType = new GraphQLObjectType({
  // GraphQL requires a name for ObjectType.
  name: 'UserType',
  fields: {
    email: { type: GraphQLString }
  }
});

module.exports = UserType;

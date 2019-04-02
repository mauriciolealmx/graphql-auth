const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const UserType = new GraphQLObjectType({
  // GraphQL requires a name for ObjectType.
  name: 'UserType',
  fields: {
    id: { type: GraphQLID },
    email: { type: GraphQLString }
  }
});

module.exports = UserType;

var express = require('express');
var graphqlHTTP = require('express-graphql');
var Graphql = require('graphql');

const personType = new Graphql.GraphQLObjectType({
  name: "Person",
  fields:{
    name: { type: Graphql.GraphQLString },
    age: { type: Graphql.GraphQLInt }
  }
});

const queryType = new Graphql.GraphQLObjectType({
  name: "Query",
  fields: {
    hello: {
      type: Graphql.GraphQLString,
      resolve: () => 'Hello world!',
    },
    persons: {
      type: new Graphql.GraphQLList(personType),
      resolve: () => {
        return [
          {name:"kim", age: 20},
          {name:"lee", age: 30},
          {name:"park", age: 40},
        ];
      }
    }
  }
});

const schema = new Graphql.GraphQLSchema({query: queryType});

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));

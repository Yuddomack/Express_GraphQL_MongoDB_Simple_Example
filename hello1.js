var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
    persons: [Person]
  }

  type Person {
    name: String
    age: Int
  }
`);

var root = {
  hello: () => 'Hello world!',
  persons: () => {
    return [
      {name:"kim", age: 20},
      {name:"lee", age: 30},
      {name:"park", age: 40},
    ];
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));

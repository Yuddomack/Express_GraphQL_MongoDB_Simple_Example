const dao = require('../business/dao');
var { buildSchema } = require('graphql');

// type Query {
//   hello: String
//   persons(name: String, age: Int): [Person]
// }
//
// type Person {
//   name: String
//   age: Int
// }
var schema = buildSchema(`
  type Query {
    hello: String
  }

  type Mutation {
    createUser(email: String!, pwd: String!): User
  }

  type User{
    id: String
    email: String
    pwd: String
    c_date: String
  }
`);
// 맞춤 스칼라 타입 지정은 어떻게?
var root = {
  hello: () => 'Hello world!',
  createUser: async (args, context, info) => {
    const {email, pwd} = args;
    console.log(email);
    console.log(pwd);

    return await dao.join.joinUser(email, pwd);
  }
};

module.exports = {schema: schema, resolver: root};

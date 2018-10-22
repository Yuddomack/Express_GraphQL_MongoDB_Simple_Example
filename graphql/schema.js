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
    users: [User]
    user(email: String!): User
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
  users: async (args, context, info) => {
    return await dao.cm.getAllUsers();
  },
  user: async (args, context, info) => {
    const {email} = args;

    return await dao.cm.getUser(email);
  },
  createUser: async (args, context, info) => {
    const {email, pwd} = args;

    return await dao.cm.joinUser(email, pwd);
  }
};

module.exports = {schema: schema, resolver: root};

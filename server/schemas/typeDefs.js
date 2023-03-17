const { gql, useMutation } = require("apollo-server-express");

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
}
type Book {
    bookId: ID
    title: String
    description: String
    image: String
    link: String
    authors: [Author]
}

type Author {
    type: String
}

type Query{
    users: [User]
    books: [Book]
    authors: [Author]
    book(id:ID!): Book
    me(id:ID!): User 
}

type Mutation{
    login(email:String!, password:String!): User
    addUser(username:String!, email:String! password:String!): User
    saveBook(bookId:ID!, authors:String, description:String!, title:String!, link:String!): Book  
    removeBook(bookId:ID!): Book
}
`;

module.exports = typeDefs;

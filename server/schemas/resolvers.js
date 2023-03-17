const { Book, User } = require("../models");

const resolvers = {
  Query: {
    books: async () => {
      // get all books
      return await Book.find({}).populate("authors");
    },
    users: async () => {
      //get all users and saved books
      return await User.find({}).populate({
        path: "books",
        populate: "savedBooks",
      });
    },
    //get a single book by id
    book: async (_, args) => {
      return await Book.findById(args.bookId).populate("authors");
    },
    //get a signle user by id
    me: async (_, args) => {
      return await User.findById(args.id);
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      return await User.create({ username, email, password });
    },
    saveBook: async (parent, { bookId, authors, description, title, link }) => {
      return await Book, create({ bookId, authors, description, title, link });
    },
    removeBook: async (parent,{bookId})=> {
      return await Book.delete({_id:id})
    },
    // Login
  },
};

module.exports = resolvers;

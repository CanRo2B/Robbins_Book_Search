// LOGIN_USER to execute the loginUser mutation set up using Apollo Server

// ADD_USER will run the addUser mutation

// SAVE_BOOK will run the saveBook mutation

// REMOVE_BOOK will run the removeBook mutation


import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user{
      _id
      username
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String) {
  addUser (username: $username, email: $email, password: $password){
      token
      user {
    username
    email
    password
      }
  }
}
`;

export const SAVE_BOOK = gql`
mutation saveBook($input: SavedBookInput) {
  saveBook (input: $input) {
      username
      _id
      bookCount
  savedBooks {
    bookId
    authors
    description
    title
    image
    link
    }
  }
}
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!) {
  removeBook (bookId: $bookId) {
    _id
    username
    bookCount
  savedBooks{
    bookId
    authors
    description
    title
    image
    link
    }
  }
}
`;
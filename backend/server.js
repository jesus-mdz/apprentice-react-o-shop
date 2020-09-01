const { ApolloServer, gql } = require('apollo-server');

const products = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1577926050848-c042a74219d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    title: 'Asian Pear',
    price: '2',
    category: 'Fruits',
    id: 1,
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1587735243615-c03f25aaff15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80',
    title: 'Orange',
    price: '1',
    category: 'Fruits',
    id: 2,
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
    title: 'Banana',
    price: '3',
    category: 'Fruits',
    id: 3,
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1528820600606-0ef5600cbfee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    title: 'Cherries',
    price: '1',
    category: 'Fruits',
    id: 4,
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1553395572-0ef353a212bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    title: 'Tomato',
    price: '2',
    category: 'Fruits',
    id: 5,
  },
];

const typeDefs = gql`
  type Product {
    title: String
    price: Int
    url: String
    category: String
    id: Int
  }

  type Query {
    products: [Product]
  }
`;

const resolvers = {
  Query: {
    products: () => products,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

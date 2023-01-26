import { ApolloServer } from 'apollo-server';
import connectDB from '../config/db.js';
import { resolvers, typeDefs } from '../db/index.js';
import { TypeDefsCurrency } from '../db/schemas/currency.js';
import { TypeDefsFees } from '../db/schemas/fees.js';

const server = new ApolloServer({
  typeDefs: [TypeDefsCurrency, typeDefs, TypeDefsFees],
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Apollo server ready on ${url}`);
});

connectDB();

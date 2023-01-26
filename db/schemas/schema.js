import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Transaction {
    id: ID!
    timestamp: String!
    state: String!
    address: String!
    amount: String!
    currency: String!
    network: String!
    operationType: String!
    fee: String!
  }

  type Balance {
    accountId: String
    balance: String!
    createdAt: String
    currency: String!
    updatedAt: String
  }

  type Price {
    value: Float
    timestamp: Float
  }

  type Query {
    balance: [Balance]!
    transactions: [Transaction]!
    transactionCount: Int!
    getBitcoinFees: Fees!
    getCoinGeckoPrices: [Price]!
  }

  input TransactionInput {
    state: String!
    address: String!
    amount: String!
    fee: String!
  }

  input BalanceInput {
    balance: Float!
    currency: String
  }

  type Mutation {
    addTransaction(input: TransactionInput): Transaction
    updateBalance(input: BalanceInput): Balance
  }
`;

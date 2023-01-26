import Balance from '../models/balance.js';
import Transaction from '../models/transaction.js';
import axios from 'axios';

export const resolvers = {
  Query: {
    balance: async () => await Balance.find(),
    transactionCount: () => Transaction.collection.countDocuments(),
    transactions: async () => await Transaction.find({}),
    getCoinGeckoPrices: async () => {
      const { data: marketChart } = await axios.get(
        `${process.env.COIN_GECKO_URL}/coins/bitcoin/market_chart?vs_currency=usd&days=30`,
      );

      return marketChart?.prices.slice(-100).map((priceData) => ({
        value: priceData[1],
        timestamp: new Date(priceData[0]).getTime(),
      }));
    },
    getBitcoinFees: async () => {
      const { data: fees } = await axios.get(
        'https://bitcoinfees.earn.com/api/v1/fees/recommended',
      );

      return fees;
    },
    getCurrency: async () => {
      const { data: currency } = await axios.get('https://ripio.com/api/v1/rates');

      return currency;
    },
  },
  Mutation: {
    addTransaction: async (_, { input }) => {
      const { state, address, amount, fee } = input;

      const timestamp = new Date().getTime();
      const transaction = new Transaction({
        state,
        address,
        amount,
        fee,
        timestamp,
        currency: 'BTC',
        operationType: 'DEBIT',
        network: 'BTC',
      });

      return await transaction.save();
    },
    updateBalance: async (_, { input }) => {
      let currencyBalance = await Balance.findOne({ currency: input.currency });

      if (currencyBalance) {
        const newAmount = +currencyBalance?.balance - input.balance;

        if (+currencyBalance.balance < +input.balance) {
          throw new Error('Not enough funds');
        }

        currencyBalance = await Balance.findOneAndUpdate(
          { _id: currencyBalance.id },
          { ...input, balance: newAmount },
        );

        return currencyBalance;
      }

      const accountId = '3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc71';

      const newBalance = { ...input, updatedAt: new Date(), createdAt: new Date(), accountId };

      currencyBalance = new Balance({
        ...newBalance,
      });

      return await currencyBalance.save();
    },
  },
};

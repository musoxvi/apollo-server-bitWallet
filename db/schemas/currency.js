import { gql } from 'apollo-server';

export const TypeDefsCurrency = gql`
  type CurrencyType {
    name: String
    symbol: String
  }

  type Variations {
    USD: Float
    ARS: Float
  }

  type Rates {
    ARS_BUY: Float
    ARS_SELL: Float
    USD_BUY: Float
    USD_SELL: Float
  }

  type CurrencyNames {
    ARS: CurrencyType
    USD: CurrencyType
  }

  type Currency {
    base: String
    rates: Rates
    variation: Variations
    names: CurrencyNames
  }

  type Query {
    getCurrency: Currency!
  }
`;

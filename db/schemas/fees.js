import { gql } from 'apollo-server';

export const TypeDefsFees = gql`
  type Fees {
    fastestFee: Float
    halfHourFee: Float
    hourFee: Float
  }
`;

# 🗄 Bitcoin Wallet Server ⚛️

### Bitcoin Wallet Server made using apollo server, mongo and graphQL! 😎

## Getting Started

```bash
# Clone this repository
$ git clone https://github.com/musoxvi/apollo-server-bitWallet

# Go into the repository
$ cd apollo-server-bitWallet

# Install dependencies
$ yarn install
```

## Available Scripts

In the project directory, you can run:

```bash
# Run the server
$ yarn start

# Run the server from developer mode
$ npm run ios
```

GraphQL schemas are made up of object types, which define what you can request and their fields. As queries come in, GraphQL approves or rejects them based on the schema, and then runs the validated ones. The server schemas are defined in [schemas](./db/schemas/) directory.

Example.

```js
import { gql } from 'apollo-server';

export const TypeDefsFees = gql`
  type Fees {
    fastestFee: Float
    halfHourFee: Float
    hourFee: Float
  }
`;
```

**Note**: 
 - Don't forget to set `.env` before running the server;
 - The server runs the  `URL: http://localhost:4000/ `

## License

[MIT](https://choosealicense.com/licenses/mit/)

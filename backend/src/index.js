import { ApolloServer, makeExecutableSchema } from 'apollo-server';

/* TYPE DEFINITIONS */
const typeDefs = `
type Hello {
    message: String!
}

type Query {
    helloWorld (name: String!): Hello
}
`;

/* RESOLVERS */
const resolvers = {
  Query: {
    helloWorld: (_, argumentos) => {
      return {
        message: `Hello ${argumentos.name || 'world'}`
      };
    }
  }
};

/* SCHEMA */

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

/* APOLLO SERVER */

const apolloServer = new ApolloServer({
  schema
});

/* Correr el servidor Apollo: */
apolloServer
  .listen(5000)
  .then(({ url }) => console.log(`Corriendo el servidor en ${url}`));

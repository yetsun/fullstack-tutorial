const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const LaunchAPI = require('./datasources/launch');
const resolvers = require('./resolvers');

const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  dataSources: () => ({
    launchAPI: new LaunchAPI(),
  }) 

});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
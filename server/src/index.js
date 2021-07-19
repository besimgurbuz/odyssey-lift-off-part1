const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const mocks = {
  Track: () => ({
    id: () => 'track_01',
    title: () => 'Astro Kitty, Space Explorer',
    author: () => {
      return {
        name: 'Grumpy Cat',
        photo: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg'
      }
    },
    thumbnail: () => 'https://miro.medium.com/max/1600/1*q6lIr0d39_nK9wBuDLbUZw.png',
    length: 1210,
    modulesCount: () => 6
  })
}

const server = new ApolloServer({ typeDefs, mocks });

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `)
})
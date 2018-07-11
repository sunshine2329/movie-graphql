# movie-graphql
Movie API with GraphQL

Live Server: <https://movie-graphql-server.herokuapp.com/>

Client Code: <https://github.com/workray/movie-graphql-client>

Client Url: <http://workray.github.io/movie-graphql-client>

## Schema
type Movie {
  id: Int!
  title: String!
  rating: Float
  description_intro: String
  language: String
  medium_cover_image: String
  genres: [String]
}

type Query {
  movies(limit: Int, rating: Float): [Movie]!
  movie(id: Int!): Movie
  suggestions(id: Int!): [Movie]!
}

## Resolvers

movies: (rating, limit)
movie: (id)
suggestions: (id)
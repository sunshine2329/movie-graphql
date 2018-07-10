import { people, getById } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: () => getById()
  }
};

export default resolvers;
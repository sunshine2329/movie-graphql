const workray = {
  name: "Raymond",
  age: 32,
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => workray
  }
};

export default resolvers;
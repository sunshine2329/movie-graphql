export const people = [
  {
    id: "1",
    name: "Raymond",
    age: 32,
    gender: "male"
  },
  {
    id: "2",
    name: "Raymond",
    age: 32,
    gender: "male"
  },
  {
    id: "3",
    name: "Raymond",
    age: 32,
    gender: "male"
  },
  {
    id: "4",
    name: "Raymond",
    age: 32,
    gender: "male"
  },
  {
    id: "5",
    name: "Raymond",
    age: 32,
    gender: "male"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => people.id === id);
  return filterPeople[0];
}
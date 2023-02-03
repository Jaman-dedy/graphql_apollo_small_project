import { GraphQLNonNull, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLBoolean  } from "graphql";

// mock users
const users = [
  {
    id: "jser1",
    fav: "ts",
  },
  {
    id: "jser2",
    fav: "flow",
  },
];

export const fetchUser = (id: string): Promise<any> => {
  // mock delay for async requests
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users.find((item) => item.id === id));
    }, 2000);
  });
};

const todos = [
  {
    id: 'todo1',
    title: 'I am completed',
    isCompleted: true
  },
  {
    id: 'todo2',
    title: ' I am still waiting',
    isCompleted: false
  },
  {
    id: 'todo3',
    title: ' I am still in process',
    isCompleted: false
  }
]

export const GraphQLTODO = new GraphQLObjectType({
  name: "Todo",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: (_): string => _.id,
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (_): string => _.title,
    },
    isCompleted: {
      type: new GraphQLNonNull(GraphQLBoolean),
      resolve: (_) => _.isCompleted,
    }
  },
});

export const GraphQLUser = new GraphQLObjectType({
  name: "User",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: (_): string => _.id,
    },
    status: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (_): string => _.fav,
    },
    todos: {
      type: new GraphQLList(GraphQLTODO),
      resolve: () => todos
    }
  },
});

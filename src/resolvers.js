// This is like the routes controllers of apirest
import { tasks } from './sample';
import User from './models/User.model';

export const resolvers = {
    Query: {

        hello: () => {
            return 'Hello World with Graphql';
        },

        greet: (root, { name }, ctx) => {
            console.log(ctx.messageId);
            return `The name is ${name}`;
        },

        tasks() {
            return tasks;
        },

        async users() {
            return await User.find();
        }
    },

    Mutation: {
        createTask(_, { input }) {
            input._id = tasks.length;
            tasks.push(input);
            return input;
        },

        async createUser(_, { input }) {
            const newUser = new User(input);
            await newUser.save();
            return newUser;
        },

        async updateUser(_, { _id, input }) {
            return await User.findByIdAndUpdate(_id, input, {new: true});
        },

        async deleteUser(_, { _id }) {
            return await User.findByIdAndDelete(_id);
        }
    }
}



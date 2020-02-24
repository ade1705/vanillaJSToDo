import {ToDoFactory} from "../src/ToDoFactory";
const faker = require('faker');

test('Test Factory to see if it creates', () => {
    let factory = new ToDoFactory(faker);
    let todos = factory.create(5);

    expect(todos.length).toEqual(5);
});

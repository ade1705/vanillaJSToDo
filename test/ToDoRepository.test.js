const toDo = require('../ToDo');
const toDoRepository = require('../ToDoRepository');

test('Test Repository to see if it adds and counts', () => {
    let todo = new toDo();
    let repo = new toDoRepository();
    todo.setTitle('Random Title');
    repo.add(todo);
    repo.add(todo);

    expect(repo.count()).toEqual(2);
});

import ToDoRepository from "../src/ToDoRepository";
import ToDo from "../src/ToDo";

test('Test Repository to see if it adds and counts', () => {
    let todo = new ToDo();
    let repo = new ToDoRepository();
    todo.setTitle('Random Title');
    repo.add(todo);
    repo.add(todo);

    expect(repo.count()).toEqual(2);
});

test('Test Repository to see if it sets as complete', () => {
    let todo = new ToDo();
    let todoRepository = new ToDoRepository();
    expect(todo.isComplete()).toEqual(false);
    todoRepository.setAsComplete(todo);
    expect(todo.isComplete()).toEqual(true);
});

test('Test Repository to see if it sets as complete by id', () => {
    let todo = new ToDo();
    let todoRepository = new ToDoRepository();

    todo.setId('23233');
    todoRepository.add(todo);
    expect(todo.isComplete()).toEqual(false);

    todoRepository.setCompleteById('23233');
    expect(todo.isComplete()).toEqual(true);
});


test('Test Repository to see if it deletes', () => {
    let todo = new ToDo();
    let todoRepository = new ToDoRepository();
    todoRepository.add(todo);
    expect(todoRepository.count()).toEqual(1);
    todoRepository.delete(todo);
    expect(todoRepository.count()).toEqual(0);
});

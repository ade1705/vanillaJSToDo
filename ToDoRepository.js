class ToDoRepository
{
    constructor() {
        this.toDos = [];
    }
    add(toDo) {
        this.toDos.push(toDo)
    }
    getAll() {
        return this.toDos;
    }
    count() {
        return this.toDos.length;
    }
    setAsComplete(todo) {
        todo.setStatus('complete');
    }
}

module.exports = ToDoRepository;

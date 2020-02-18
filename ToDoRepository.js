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
}

module.exports = ToDoRepository;

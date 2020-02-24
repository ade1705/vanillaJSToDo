export default class ToDoRepository
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
    setAsInComplete(todo) {
        todo.setStatus('incomplete');
    }
    findById(id) {
        return this.toDos.find(todo => todo.getId() === id);
    }
    setCompleteById(id) {
        this.setAsComplete(this.findById(id));
    }
    setInCompleteById(id) {
        this.setAsInComplete(this.findById(id));
    }
    delete(todoToBeDeleted) {
        this.toDos = this.toDos.filter((todo) => {
            return todo !== todoToBeDeleted;
        });
    }
    deleteById(id) {
        this.delete(this.findById(id));
        console.log(this.toDos);
    }
}

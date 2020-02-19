import {ToDoClickHandler} from "./ToDoClickHandler";


export default class ToDoApp {
    constructor(todoFactory, todoHtmlCreator, todoRepository) {
        this.todoFactory = todoFactory;
        this.todoHtmlCreator = todoHtmlCreator;
        this.todoRepository = todoRepository;
        this.todoFactory.create(5).forEach((todo) => {
            this.todoRepository.add(todo);
        });
        this.todoHandler = ToDoClickHandler(this.todoRepository);
        document.body.addEventListener("click",  (event) => this.todoHandler.handle(event, this.render()));
    }

    render() {
        this.listItems = this.todoRepository.getAll().map((todo) =>
            this.todoHtmlCreator.create(todo)
        ).join('');
        document.querySelector('[data-binding="todoList"]').innerHTML = this.listItems;
    }
}

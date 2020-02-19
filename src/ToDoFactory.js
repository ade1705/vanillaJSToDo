import ToDo from "./ToDo";

export class ToDoFactory {
    constructor(faker) {
        this.faker = faker;
    }

    create(numberOfTodos) {
        return [...Array(numberOfTodos).keys()].map(() => this.createTodo() );
    }

    createTodo() {
        let todo = new ToDo();
        todo.setId(this.faker.random.uuid());
        todo.setTitle(this.faker.company.bs());
        todo.setType(this.faker.fake("{{name.lastName}}"));
        todo.setPriority(this.faker.random.arrayElement(["high", "medium", "low"]));
        todo.setStatus(this.faker.random.arrayElement(["complete", "incomplete"]));
        todo.setDueDate(this.faker.date.between('2020-01-01', '2020-12-31'));
        return todo;
    }
}

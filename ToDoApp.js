export default class ToDoApp {
    todoHTML = '<div class="d-flex item w-100p">\n' +
        '                    <div class="d-flex align-items-center">\n' +
        '                        <label class="checkbox-label">\n' +
        '                            <input type="checkbox">\n' +
        '                            <span class="checkbox-custom rectangular"></span>\n' +
        '                        </label>\n' +
        '                    </div>\n' +
        '                    <div class="padding-10">\n' +
        '                        <h2 class="margin-0">Title of stuff\n' +
        '                        </h2>\n' +
        '                        <small>\n' +
        '                            <span class="red-text">HIGH</span>\n' +
        '                            <span class="grey-text">3 DAYS TO GO</span>\n' +
        '                        </small>\n' +
        '                        <div>\n' +
        '                            <small class="badge badge-red rounded-sm shadow">COMPLETED</small>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>';

    numbers = [1, 2, 3, 4, 5];

    listItems = this.numbers.map((number) =>
        this.todoHTML
    ).join('');

    render() {
        document.querySelector('[data-binding="todoList"]').innerHTML = this.listItems;
    }
}

export default class ToDo
{
    constructor() {
        this.title = '';
        this.dueDate = new Date();
        this.type = 'random';
        this.status = 'incomplete';
        this.priority = 'low';
        this.id = '1';
    }

    setTitle(title) {
        this.title = title;
    }

    setId(id) {
        this.id = id;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    setType(type) {
        this.type = type;
    }

    setStatus(status) {
        this.status = status;
    }

    setPriority(priority) {
        this.priority = priority;
    }

    getTitle() {
        return this.title;
    }

    getPriority() {
        return this.priority;
    }

    getType() {
        return this.type;
    }

    getStatus() {
        return this.status;
    }

    getDueDate() {
        return this.dueDate;
    }

    getId() {
        return this.id;
    }

    isComplete() {
        return (this.status === 'complete');
    }
}

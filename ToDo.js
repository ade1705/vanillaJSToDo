class ToDo
{
    title = '';
    dueDate = new Date();
    type = 'random';
    status = 'incomplete';
    priority = 'low';

    setTitle(title) {
        this.title = title;
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

    isComplete() {
        return (this.status === 'complete');
    }
}

module.exports = ToDo;

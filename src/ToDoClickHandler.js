export const ToDoClickHandler = (todoRepository) => {
    const statusHandler = (event) => {
        let isChecked = event.target.previousSibling.previousElementSibling.checked;
        isChecked
            ? todoRepository.setInCompleteById(event.target.parentElement.parentElement.nextSibling.nextSibling.title)
            : todoRepository.setCompleteById(event.target.parentElement.parentElement.nextSibling.nextSibling.title);
    };

    const deleteHandler = (event) => {
        todoRepository.deleteById(event.target.parentElement.previousElementSibling.title);
    };

    const handle = (event, callback) => {
        if (event.target.classList.contains("delete")) {
            deleteHandler(event);
            callback();
        }

        if (event.target.classList.contains("checkbox-custom")) {
            statusHandler(event);
            callback();
        }
    };

    return ({ handle })
};

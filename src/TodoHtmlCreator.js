export default class TodoHtmlCreator
{
    create(todo) {
        return `<div class="d-flex item w-100p justify-content-space-between">
                    <div class="d-flex align-items-center">
                        <label class="checkbox-label">
                            <input type="checkbox" ${todo.isComplete() ? 'checked' : ''}>
                            <span class="checkbox-custom rectangular"></span>
                        </label>
                    </div>
                    <div class="padding-10" title="${todo.getId()}">
                        <h2 class="margin-0 text-capitalize">${todo.getTitle()}
                        </h2>
                        <small>
                            <span class="red-text text-uppercase">${todo.getPriority()}</span>
                            <span class="grey-text text-uppercase">${todo.getDueDate()}</span>
                        </small>
                        <div>
                            <small class="badge badge-red rounded-sm shadow text-uppercase">${todo.getStatus()}</small>
                        </div>
                    </div>
                    <div class="d-flex align-items-center pointer">
                        <img src="https://cdn4.iconfinder.com/data/icons/linecon/512/delete-512.png" width="16" class="delete" />
                    </div>
                </div>
        `
    }
}

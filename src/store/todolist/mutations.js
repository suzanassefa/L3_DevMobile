

export function missionCompleted(state, todoId) {
    let todo = todoId;
    todo.done = !todo.done;
}
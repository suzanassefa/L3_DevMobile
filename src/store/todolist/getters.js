export const listetodos = (state) => {

    return state.todos;
}

//parcourt la todos pour trouver une todo avec le même id qu en parammètre
export const getTodoId = (state) => (id) => {

        return state.todos.find((todolist) => todolist.id === id);
    
    

    }

// parcourt todos à la rechere d'un todo à true
export const doneTodo = (state) => {
        return state.todos.filter(todo => todo.done);
    }
// parcourt todos à la rechere d'un todo à false
export const activeTodos = (state) => { 
    return state.todos.filter(todo => !todo.done);
}



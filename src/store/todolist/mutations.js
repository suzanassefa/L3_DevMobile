

export function  GET_TODO(state, todo){
      state.newTodo = todo
    }
    
export function ADD_TODO(state){
      state.todos.push({
        body: state.newTodo,
        completed: false
      })
    }
        
export function EDIT_TODO(state, todo){
       var todos = state.todos
       todos.splice(todos.indexOf(todo), 1)
       state.todos = todos
       state.newTodo = todo.body
    }
       
export function REMOVE_TODO(state, todo){
       var todos = state.todos
       todos.splice(todos.indexOf(todo), 1)
    }
        
export function COMPLETE_TODO(state, todo){
      todo.completed = !todo.completed
      console.log("ok");
    }
       
export function CLEAR_TODO(state){
      state.newTodo = ''
    }
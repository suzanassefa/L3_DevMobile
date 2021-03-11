

export function  GET_TODO(state, todo){
      state.newTodo = todo
    }
    
export function ADD_TODO(state, todo){
      state.todos.push({
        id: state.cpt + 1,
        name: todo,
        done: false
      })
      
    }
        
export function EDIT_TODO(state, todo){
       var todos = state.todos
       todos.splice(todos.indexOf(todo), 1)
       state.todos = todos
       state.newTodo = todo.name
    }
       
export function REMOVE_TODO(state, todo){
       var todos = state.todos
       todos.splice(todos.indexOf(todo), 1)
    }
        
export function COMPLETE_TODO(state, todo){
      todo.done = !todo.done
      console.log("ok");
    }
       
export function CLEAR_TODO(state){
      state.newTodo = ''
    }
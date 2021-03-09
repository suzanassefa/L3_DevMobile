export function  getTodo({commit}, todo){
    commit("GET_TODO", todo)
  }

  export function  addTodo({commit}){
    commit("ADD_TODO")
  }

  export function  editTodo({commit}, todo){
    commit("EDIT_TODO", todo)
  }

  export function  removeTodo({commit}, todo){
    commit("REMOVE_TODO", todo)
  }

  export function  completeTodo({commit}, todo){
   commit("COMPLETE_TODO", todo)
  }

  export function  clearTodo({commit}){
    commit("CLEAR_TODO")
  }
  
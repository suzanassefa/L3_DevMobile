<template>
    <div class="home">
        <ul class="todos-list">
            <li v-for="todo in listetodos" v-bind:key="todo.id">
                <span class="todo-content" :class="{done: todo.done }"
                @click="completeTodo(todo);"> {{todo.id}} : {{todo.name}} </span>
                <span class="del-todo" @click="removeTodo(todo);">Delete</span>
            </li>
        </ul>
    </div>
</template>
<script>
    import {   mapActions, mapGetters } from "vuex";

    export default {
        name: 'Sidebaritem',
         
        data() {
            return {
                
            }
        },
        
      
        methods: {
            ...mapActions("todolist", ['completeTodo']),

        },
        
        computed: {
            ...mapGetters("todolist", ['listetodos']),


            


        }
    }
</script>


<style >

.home {
  width: 65%;
  margin: 0 auto;
}
.todos-list{
  list-style: none;
  text-align: left;
}
.todo-item{
  padding: 10px;
  cursor: pointer;
}
.todo-content {
  font-size: 20px;
  line-height: 1.5;
   transition: font-weight .5s ease-in-out;
  
}

.todo-content:hover {
    font-weight:bold;
}

.del-todo {
    color: red;
    font-size: 14px;
    float: right;

}

.del-todo:hover{
    color: red;
    font-weight: bold;
}


.done {
    text-decoration: line-through;
    color: #dadadc;
}

.done:hover {
    font-weight:normal;
}
</style>
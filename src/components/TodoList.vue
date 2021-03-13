<template>
  <div class="todoapp">

    <div class="header">
      <input type="text" class="new-todo" placeholder="Ajouter une tache" v-model=newTodo @keyup.enter="addTodo(newTodo)">
      <button class="addListe" @click="addTodo(newTodo)">Ajouter</button>
    </div>

    <div class="main">
      <ul class="todo-list">
        <li class="todo" v-for="todo in listetodos" v-bind:key="todo.id"  :class="{completed: todo.completed, editing: todo == editing}">
          <div class="view">
             <input type="checkbox" v-model="todo.completed" class="toggle">
            <label @dblclick="editTodo(todo)">{{ todo.name }}</label>
            <button class="destroy" @click.prevent="removeTodo(todo)"></button>
          </div>
          <input type="text" class="edit" v-model="todo.name" @keyup.enter="doneEditing(editing)"  @blur="doneEditing(editing)" @keyup.esc="cancelEditing(editing)" v-focus="todo == editing">
        </li>
      </ul>
    </div>

    <footer class="footer pb-10" v-show="hasTodos" >
      <span class="todo-count"><strong>{{ remaining }}</strong> tâches à faire</span>
      <ul class="filters">
        <li><a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">Toutes</a></li>
        <li><a href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'">A faire</a></li>
        <li><a href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Faites</a></li>
      </ul>
    </footer>

  </div>
</template>

<script>
    import {   mapActions, mapGetters } from "vuex";

    export default {
        name: 'TodoList',

        data() {
            return {
                newTodo: "",
                filter : 'all',
            }
        },

        methods: {
            //...mapActions("todolist", ['completeTodo']),

            ...mapActions("todolist", ['addTodo']),
            ...mapActions("todolist", ['removeTodo']),
            ...mapActions("todolist", ['editTodo']),
            ...mapActions("todolist", ['doneEditing']),
            ...mapActions("todolist", ['hasTodos']),

            //filtre la liste, à mettre a la place de listetodos quand il y a plus de beug
            //...mapActions("todolist", ['filteredTodos']),


        },

        computed: {
            ...mapGetters("todolist", ['listetodos']),
            ...mapGetters("todolist", ['editing']),
            ...mapGetters("todolist", ['remaining']),

        },
        directives: {
          focus(el, value){
            if(value){
              el.focus()
            }
          }
      }
    }
</script>



<style src="../style/app.css"></style>

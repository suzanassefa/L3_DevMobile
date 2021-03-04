<template>
    <div class="home">
        <ul>
            // liste des todos (liste de listes)
            <li v-for="todo in listetodos" v-bind:key="todo.id">
                <todo :id="todo.id"></todo>
            </li>
        </ul>
    </div>
</template>
<script>
    import {  mapGetters } from "vuex";

    export default {
        name: 'Sidebar',
         
        data() {
            return {
                
            }
        },
        
      
        methods: {
            //...mapActions("todolist", ['à définir']),
        },
        
        computed: {
            ...mapGetters("todolist", ['listetodos'])
        }
    }
</script>

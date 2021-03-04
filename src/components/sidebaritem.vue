<template>
    <div class="home">
        <ul>
            <li v-for="todo in listetodos" v-bind:key="{todo}">
                {{todo.id}} : {{todo.name}} - {{todo.done}} 
            </li>
        </ul>
    </div>
</template>
<script>
    import {  mapGetters } from "vuex";

    export default {
        name: 'Sidebaritem',
         
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

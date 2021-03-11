<template>
    <div class="home">
        <TodoList></TodoList>
        <Sidebar></Sidebar>

    </div>
</template>
<script>
    import TodoList from '@/components/TodoList.vue';
    import Sidebar from '@/components/sidebar.vue';


    export default {
        name: 'Home',
        components: {
            TodoList,
            Sidebar
        },
        
    }
</script>

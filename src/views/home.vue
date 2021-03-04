<template>
    <div class="home">
        <Sidebaritem></Sidebaritem>
        <Sidebar></Sidebar>

    </div>
</template>
<script>
    import Sidebaritem from '@/components/sidebaritem.vue';
    import Sidebar from '@/components/sidebar.vue';


    export default {
        name: 'Home',
        components: {
            Sidebaritem,
            Sidebar
        },
        
    }
</script>

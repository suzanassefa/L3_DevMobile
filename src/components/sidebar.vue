<template>
    <div>
    <p>{{ getTodoId.id }}</p>
    <p>{{ getTodoId.name }}</p>
    <p>{{ getTodoId.done }}</p>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {

        name: 'Sidebar',
       
        data() {
            return {
                
            }
        },
        props: {
            id: {type: String, default: "1"}
        },
        computed:{
            ...mapGetters('todolist', ['getTodoId']),

            todo() {
                return this.getTodoId(this.id)

            }
           
        }
    }

</script>
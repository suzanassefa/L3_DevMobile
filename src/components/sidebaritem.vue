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

        name: 'Sidebaritem',
       
        data() {
            return {
                
            }
        },
        // identifiant du listetodos, grâce à props, accéder à this.id
        props: {
            id: {type: String, default: "1"}
        },
        computed:{
        // données de mon listetodos ("fichier json") dans le store immo
            ...mapGetters('todolist', ['getTodoId']),

            todo() {
                return this.getTodoId(this.id)

            }
           
        }
    }

</script>
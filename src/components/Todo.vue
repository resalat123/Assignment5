<template>
    <div class="container">
        <div class="left">
            <h1>{{title}}</h1>

            <form @submit.prevent="mainAddTask">
                <div class="form-group">
                    <input
                    v-model="newTask"/>
                </div>
            </form>

            <ul>
                <li v-for="(task,index) in tasks" :key="index">
                    {{task}}
                    <button @click="deleteTask(index)">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                    <button @click="complete(task)">complete</button>
                </li>
            </ul>
        </div>
        <div class="right">
            {{countTasks}} items left
        </div>
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return{
            newTask: "",
            completed: false
        }
    },
    computed: {
        ...mapState(['title', 'tasks']),
        ...mapGetters(['countTasks'])
        
    },
    methods:{
        ...mapMutations(['addTask']),
        ...mapActions(['mainRemoveTask','mainCompleteTask']),
        mainAddTask(){
            this.addTask(this.newTask,this.completed)
            this.newTask="",
            this.completed="false"
            
        },
        deleteTask(task){
            this.mainRemoveTask(task)
        },
        complete(task){
            this.mainCompleteTask(task)
        }
    }
    
}
</script>
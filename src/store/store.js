import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        title: "My Todo App",
        tasks:['task one', 'task two', 'task three'],
    },
    getters:{
        countTasks: (state)=>{
            return state.tasks.length
        }
    },
    mutations:{
        addTask: (state,task)=>{
            state.tasks.push(task)
        },
        removeTask: (state, task)=>{
            state.tasks.splice(task,1)
        },
        completeTask: (state,task)=>{
            task.completed = !task.completed
        }

    },
    actions:{
        mainRemoveTask: (context, task)=>{
            context.commit("removeTask", task)
        },
        mainCompleteTask(context, task){
            context.commit('completeTask', task)
           }
    }
})
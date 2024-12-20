<script setup>
import { reactive } from "vue";
import childcomp from "./childcomp.vue";
var state=reactive({
    todos:[{
        title:"lakshmana",
        status:false
    }],
    index:'',
     status:false
 })
 function add(){
    state.todos.push({title:document.getElementById("text").value,status:false})
  }
  function donefn(i){
    console.log(i)
    state.todos[i].status = !state.todos[i].status
  }
  function deletefn(i){
    state.todos.splice(i,1)
  }
  function editfn(todo,i){
    state.index=i
    document.getElementById("text").value=todo
     state.status=true
    //   document.getElementById("s3").style.visibility="hidden"
    //   document.getElementById("s2").style.visibility="visible"
    }
  function update(){
     state.todos.splice(state.index,1,{title: document.getElementById("text").value})
     state.status=false
    //   document.getElementById("s3").style.visibility="visible"
    //   document.getElementById("s2").style.visibility="hidden"
    }

  
</script>
<template>
    <div class="container border border ">
        <div class="text-center">

            <h1>Todolist</h1>
            <input class="rounded" type="text"  id="text" />
            <button v-if="!state.status" class="btn btn-primary m-2" @click="add" >Addtodos</button>
            <button v-if="state.status" class="btn btn-primary m-2 " @click="update" >Updatetodos</button>
           
            <childcomp :data="state.todos" :done="donefn" :deletefn="deletefn" :editfn="editfn"></childcomp>
        </div>

    </div>
</template>
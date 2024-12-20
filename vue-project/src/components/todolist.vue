<script setup>
import { reactive } from 'vue';
 var x=null
 var state=reactive({
    todos:[{
        title:"lakshmana",
        status:false
    }]
 })
  function add(){
    state.todos.push({title:document.getElementById("s1").value,status:false})
  }
  function dele(i){
    console.log(i)
    state.todos.splice(i,1)
  }
  function done(i){
    state.todos[i].status= !state.todos[i].status
  }
  function edit(nam){
    document.getElementById("s1").value=nam
    document.getElementById("add").style.visibility="hidden"
    document.getElementById("up").style.visibility="visible"
  }
  function update(){
    state.todos.splice(0,1,{title: document.getElementById("s1").value})  
    document.getElementById("add").style.visibility="visible"
    document.getElementById("up").style.visibility="hidden"
  }
</script>
<template>
    <div >

        <input type="text" id="s1" />
        <button @click="add()" id="add">Add Todo</button>
        <button @click="update()" :style="{visibility:'hidden' }" id="up">Update</button>
        <div>
            <ul  >
                <li v-for="(todos,i) in state.todos" :key="i" >
                    {{todos.title}}
                    <button @click="dele(i)">Delete</button>
                    <button v-if="todos.status" @click="done(i)"  > UNDO</button>
                    <button v-if="!todos.status" @click="done(i)">DONE</button>
                    <button @click="edit(todos.title)">Edit</button>
                </li>
            </ul>
        </div>
    </div>
</template>
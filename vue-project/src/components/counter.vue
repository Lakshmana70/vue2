<script setup>
import { reactive } from 'vue';

  var state=reactive({count:0})
 function inc(){
     state.count++
 }
 function dec(){
     state.count--
    
 }
 function Rec(){
     state.count=0
 }
</script>
<template>
    <div :style="{border:'2px solid',width:'300px',textAlign:'center'}">

        <h1> Counter:{{ state.count }}</h1>
        <button @click="inc()" :style="{margin:'5px',borderRadius:'20px', padding:'2px', background:'green'}">Incremet</button>
        <button @click="dec()" :style="{margin:'5px',borderRadius:'20px', padding:'2px', background:'red'}" >Decremet</button>
        <button @click="Rec()" :style="{margin:'5px',borderRadius:'20px', padding:'2px', background:'yellow'}">Reset</button>
       
    </div>
</template>
<script setup>

import { reactive } from 'vue';

  var state=reactive({
    fromdetails:{
      firstname:'',
      lastname:'',
      age:'',
      gender:'',
      Techs:[]
    }
  })
   function onSubmit(){
    console.log(state.fromdetails)
   }
</script>
<template>
    <div class="card">
        <form  @submit.prevent="onSubmit">
            <input type="text" placeholder="firstname" v-model="state.fromdetails.firstname"><br>
            <input type="text" placeholder="lastname" v-modal="state.fromdetails.lastname"><br>
            <input type="number" placeholder="age" v-model="state.fromdetails.age"><br>
            <input v-model="state.fromdetails.gender"  type="radio" value="male">:male 
            <input v-model="state.fromdetails.gender"  type="radio" value="female">:female
            <input v-model="state.fromdetails.gender"  type="radio" value="others">:others <br>
            <input type="checkbox" value="rjs" v-model="state.fromdetails.Techs">:Reactjs
            <input type="checkbox" value="njs" v-model="state.fromdetails.Techs">:Nextjs
            <input type="checkbox" value="vjs" v-model="state.fromdetails.Techs">:vuejs <br>
              <button >Submit</button>
        </form>
    </div>
</template>
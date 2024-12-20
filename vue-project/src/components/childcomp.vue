<script setup>
// const props = defineProps({data:Array,done:Function});
 const props=defineProps(["data","done","deletefn","editfn"])


</script>

<template>
  <div>
    <ul v-for="(todo, i) in data" :key="i">
      <li>{{ todo.title }}
      <button class="btn btn-danger m-1" @click="deletefn(i)" >Delete</button>
      <button  v-if="!todo.status"  class="btn btn-success m-1" @click="done(i)" >Done</button>
      <button   v-if="todo.status" class="btn btn-warning m-1"  @click="done(i)">Undo</button>
      <button   class="btn btn-primary m-1"  @click="editfn(todo.title,i)">Edit</button>


      </li>
    </ul>
  </div>
</template>
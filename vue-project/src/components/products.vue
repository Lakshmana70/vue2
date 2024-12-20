<script setup>

 import { onMounted, reactive } from 'vue';

 var state=reactive({
    products:''
 })
  onMounted(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json()).then((data)=>{state.products=data})
  })
</script>
<template>
  
    <div>
        <h1>Products</h1>
        <div class=" container d-flex flex-wrap ">
            <div  v-for="(products,i) in state.products" :key="i">
                <div class="card m-2 p-2" >
                   <img :style="{width:'300px',height:'200px'}" :src="products.image" alt="">
                  <RouterLink to="/lak"> <b>{{ products.title.slice(0,20) }}</b></RouterLink>
                   <button class="btn btn-primary m-2">Add to card</button>

                </div>

            </div>
        </div>
        <!-- <RouterView/> -->
    </div>
</template>
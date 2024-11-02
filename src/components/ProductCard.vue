<script setup>
import { defineProps, computed } from 'vue'
  
const props = defineProps({
name: {
    type: String,
    required: true,
},
price: {
    type: String,
    required: true,
},
})
  
</script>

<template>
    <div class="contener">
      <p class="name">{{ name }}</p>
      <p class="price">{{ price }}</p>
    </div>
</template>
<style scoped>
.contener{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.name {
    font-size: 1.2vh;
    color: #5d5b5b;
    font-family: "Noto Sans Arabic", sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-size: 1.5vh;
    font-style: normal;
    text-decoration: none;
}
.price {
    font-size: 1.8vh;
    color: #c43e2e;
    font-family: "Noto Sans Arabic", sans-serif;
    font-weight: 900;
}
</style>
  
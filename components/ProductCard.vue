<template>
  <div class="card px-5 py-10 text-center flex flex-col items-center">
      <img :src="product.image" alt="Product image" class="p-image h-full">
      <p class="font-bold w-full text-gray-500 m-4 truncate">{{ product.title }}</p>
      <NuxtLink class="w-[100%] sm:w-[80%] md:w-[80%] lg:w-[80%]" :to="`/products/${product.id}`">
          <p class="btn">View Details</p>
      </NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(['product'])
console.log(product.value)
</script>

<style scoped lang="scss">
.p-image {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto; 
}
</style>
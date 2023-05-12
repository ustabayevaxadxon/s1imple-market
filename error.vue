<template>
  <div class="mt-7 max-w-sm mx-auto text-center card">
      <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
      <p class="mt-7 text-3xl">Oops.</p>
      <p class="mt-7 text-2xl">{{ error.message }}</p>
      <button class="btn mt-7" @click="handleError" >Back to Home</button>
  </div>
</template>

<script setup>
defineProps(['error'])
const handleError = function () {
    clearError({ redirect: '/' })
}
</script>

<style scoped lang="scss">
a {
  color: blue;
  text-decoration: underline;
}
</style>
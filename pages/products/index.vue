<template>
    <div>
        <div class="grid lg:grid-cols-4 lg:gap-5 md:grid-cols-3 md:gap-3 grid-cols-1 gap-2 min-[425px]:grid-cols-2">
            <div v-for="product in products" :key="product.id">
                <ProductCard :product="product" ></ProductCard>
            </div>
        </div>
    </div>
</template>


<script setup>
  definePageMeta({
      layout: 'products'
  })

  const { data: products } = await useFetch('https://fakestoreapi.com/products')

  useHead({
      title: 'MarketPlace | Merch',
      meta: [
          {
              name: 'description',
              content: 'MarketPlace | Merch'
          }
      ]
  })

</script>

<style scoped lang="scss">

</style>
<template>
    <div>
        <Head>
            <Title>
                MarketPlace | {{ product.title }}
            </Title>
            <Meta name="description" :content="product.description"></Meta>
        </Head>
        <ProductDetails :product="product"></ProductDetails>
    </div>
</template>

<script setup>
  const { id } = useRoute().params

  const { data: product } = await useFetch(`https://fakestoreapi.com/products/${id}`)

  if(!product.value) {
      throw createError({
          statusCode: 404,
          statusMessage: 'Product not found',
          fatal: true
      })
  }

  definePageMeta({
      layout: 'products'
  })
</script>

<style scoped lang="scss">

</style>
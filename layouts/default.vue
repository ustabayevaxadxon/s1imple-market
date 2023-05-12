<template>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
            <NuxtLink class="font-bold" to="/">MarketPlace</NuxtLink>
            <ul class="flex gap-4">
                <li>
                    <NuxtLink  to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="btn" to="/products">Products</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="btn" to="tel:+998999999999">Contact us</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>

    <div class="container mx-auto p-4">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
header {
    .router-link-exact-active {
        color: #12b488;
    }
}
</style>
<script setup lang="ts">
</script>
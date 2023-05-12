<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between items-center">
                <NuxtLink class="font-bold" to="/products">MarketPlace Merch</NuxtLink>
                <NuxtLink class="btn" to="tel:+998999999999">Contact us</NuxtLink>
            </nav>
        </header>

        <div class="container mx-auto p-4">
            <slot></slot>
        </div>

        <footer class="container mx-auto pt-5 pb-16 flex justify-between items-center border-t-2">
            <ul class="flex gap-4 mx-4">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products">Products</NuxtLink>
                </li>
            </ul>
        </footer>
    </div>
</template>

<style scoped lang="scss">
    .router-link-exact-active {
        color: #12b488;
    }

</style>
<script setup>
</script>
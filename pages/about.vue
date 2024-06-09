<template>
    <div>
        <header>
            <nav>
                <nuxt-link to="/">Đoàn Khiêm</nuxt-link>
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/about">About</nuxt-link></li>
                    <li><nuxt-link to="/products">Products</nuxt-link></li>
                </ul>
                <a href="/about">normal link  -- about page</a>
            </nav>
        </header>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat minus odio nihil repellendus dolorum maxime explicabo consequatur numquam aperiam, beatae iure distinctio consectetur, ipsam doloribus eos, accusantium quaerat odit. Iste?</p>
    </div>
</template>

<script setup>

</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>
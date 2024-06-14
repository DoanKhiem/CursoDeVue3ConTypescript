<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button>Sign up</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from "vuex";

const store = useStore();
const email = ref('')
const password = ref('')

const handleSubmit = () => {
  console.log(email.value, password.value)
  store.dispatch('signUp', { email: email.value, password: password.value })
}
</script>
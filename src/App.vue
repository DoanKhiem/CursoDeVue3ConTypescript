<template>
  <main>

    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h1>{{ name }}</h1>
    </header>

    <!-- new task form -->
    <div class="new-task-form">
      <TaskForm />
    </div>

    <!-- filer  -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>

    <!-- loading -->
    <div class="loading" v-if="loading">Loading tasks...</div>

    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>Your have {{ totalCount }} tasks left to do</p>
      <div v-for="task in tasks" :key="task.id">
        <!-- <p>{{ task.title }}</p> -->
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>Your have {{ favCount }} favs left to do</p>
      <div v-for="task in favs" :key="task.id">
        <!-- <p>{{ task.title }}</p> -->
        <TaskDetails :task="task" />
      </div>
    </div>

    <button @click="taskStore.$reset">reset the state</button>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import TaskDetails from './components/TaskDetails.vue'
import TaskForm from './components/TaskForm.vue'
import { useTaskStore } from './stores/TaskStore'
import { storeToRefs } from 'pinia'

const taskStore = useTaskStore()
const { tasks, loading, favs, totalCount, favCount, name } = storeToRefs(taskStore)
const filter = ref('all')
// fetch tasks
taskStore.getTasks()
</script>

<style scoped></style>

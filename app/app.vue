<template>
  <div>
    <button @click="() => loginUser('morettijessiocadev@gmail.com', 'Ciaociao123@')
    ">Registrati</button>
  </div>
</template>

<script setup lang="ts">
import { loginUser } from './composables/firebase-auth';
</script>
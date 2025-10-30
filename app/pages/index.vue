<template>

    <button @click="() => loginUser({
        email: 'morettijessica@gmail.com',
        password: 'Ciaociao123@'
    })
    ">Registratii</button>
</template>


<script setup lang="ts">
import { loginUser } from '../composables/firebase-auth';

definePageMeta({
    middleware: [
        'auth',
    ],
})

</script>
<template>
    <div class="flex justify-center items-center h-screen bg-linear-to-br from-[#f9f9fb] via-[#f3f1ff] to-[#eae6ff]">
        <FormBox title="Benvenuto" description="Accedi al tuo account" icon-name="bxs:user">
            <LoginForm />
        </FormBox>
    </div>
</template>

<script setup lang="ts">
import FormBox from '~/components/auth/FormBox.vue'
import LoginForm from '~/components/auth/login/loginForm.vue';

definePageMeta({
    middleware: ['auth'],
})
</script>
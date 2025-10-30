<template>
    <form class="w-full" @submit.prevent="onSubmit">
        <div class="flex justify-center items-center flex-col gap-y-6 mb-8">
            <GenericInput v-model="email as string" label="Email" type="email" icon-name="bxs:envelope" />

            <GenericInput v-model="password as string" label="Password" type="password" icon-name="bxs:lock"
                :error="serverError" />
        </div>

        <div class="gap-y-6 flex justify-center items-center flex-col">
            <GenericButton label="Accedi" :disabled="!meta.valid" />

            <p>
                Non hai un account?
                <NuxtLink to="/signup" class="text-primary-200 hover:underline font-medium">
                    Registrati
                </NuxtLink>
            </p>

            <div class="w-full flex justify-center items-center flex-col gap-y-4">
                <p>Oppure</p>
                <GenericButton label="Continua con Google" variant="secondary" icon-name="logos:google-icon"
                    @click="handleGoogleLogin" />
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import GenericButton from '~/components/common/GenericButton.vue'
import GenericInput from '~/components/common/GenericInput.vue'
import { loginUser, loginWithGoogle } from '~/composables/firebase-auth'
import { AuthPayloadSchema } from '~/schemas/auth/auth.schema'

const router = useRouter()

const { handleSubmit, meta } = useForm({
    validationSchema: toTypedSchema(AuthPayloadSchema),
})

const serverError = ref('')

const {
    value: email,
    // errorMessage: emailError,
} = useField('email')

const {
    value: password,
    // errorMessage: passwordError,
} = useField('password')

watch([email, password], () => {
    if (serverError.value) serverError.value = ''
})

async function handleGoogleLogin() {
    const { error } = await loginWithGoogle();
    if (error) {
        serverError.value = error

        return
    }
    router.push('/home')
}

const onSubmit = handleSubmit(async (values) => {
    const { error } = await loginUser(values)

    if (error) {
        serverError.value = error

        return
    }
    router.push('/home')
})
</script>
<template>

    <div class="lg:w-[400px]  p-10 rounded-2xl shadow-xl bg-white flex justify-center items-center flex-col h-auto">
        <div class="flex justify-center items-center flex-col gap-y-2 mb-6">
            <AuthStepIconBadge :icon-name="iconName" />
            <h1 class="font-bold text-xl">{{ title }}</h1>
            <p class="text-sm">{{ description }}</p>
        </div>
        <slot />
    </div>

</template>


<script setup lang="ts">
import AuthStepIconBadge from './AuthStepIconBadge.vue';

defineProps({
    iconName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

</script>
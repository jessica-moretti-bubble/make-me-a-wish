<template>
    <div class="w-full flex flex-col gap-1">
        <label v-if="label" :for="id" class="text-sm font-medium text-gray-700">
            {{ label }}
        </label>

        <div
            class="relative flex items-center border rounded-lg px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-violet-500 focus-within:border-violet-500 transition">
            <Icon :name="iconName" style="scale: 1.2; " />
            <input :id="id" v-model="inputValue" :type="type" :placeholder="placeholder"
                class="w-full pl-9 pr-3 bg-transparent outline-none text-gray-800 placeholder-gray-400" />
        </div>

        <p v-if="error" class="text-sm text-red-500 mt-1">
            {{ error }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    id: { type: String, default: '' },
    label: { type: String, default: '' },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    modelValue: { type: String, default: '' },
    iconName: { type: String, default: '' },
    error: { type: String, default: '' }
})

const emit = defineEmits(['update:modelValue'])

const inputValue = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
})
</script>

<style scoped>
input:-webkit-autofill {
    transition: background-color 9999s ease-in-out 0s;
}
</style>
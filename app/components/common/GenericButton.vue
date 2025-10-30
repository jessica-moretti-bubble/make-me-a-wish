<template>
    <button :disabled="disabled" :class="[
        'w-full flex justify-center items-center font-semibold h-12 rounded-lg transition-colors duration-200 select-none',
        disabled
            ? 'opacity-50 cursor-not-allowed'
            : 'cursor-pointer',
        variant === 'primary'
            ? 'bg-gradient-primary text-white hover:opacity-90'
            : 'bg-white text-black border border-gray-300 hover:bg-gray-100'
    ]">
        <div class="flex items-center justify-center gap-x-4">
            <Icon v-if="iconName" :name="iconName" class="text-white" style="scale: 1.2;" />
            <p>{{ label }}</p>
        </div>
    </button>
</template>

<script setup>
defineProps({
    variant: {
        type: String,
        default: 'primary',
    },
    label: {
        type: String,
        required: true,
    },
    iconName: {
        type: String,
        default: '',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
})
</script>
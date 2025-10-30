<template>

    <div class="size-18 rounded-2xl bg-gradient-primary flex justify-center items-center">

        <Icon :name="iconName" style="scale: 1.5; color: white;" />


    </div>

</template>


<script setup lang="ts">

defineProps({
    iconName: {
        type: String,
        required: true
    },

})




</script>
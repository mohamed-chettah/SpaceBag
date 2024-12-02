<script setup lang="ts">
const props = defineProps({
  description: String,
  icon: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="flex justify-center items-center gap-4 w-full">
    <UIcon :name="icon" class="w-12 h-12" />
    <p class="w-1/2">
      {{ description }}
    </p>
  </div>
</template>

<style scoped lang="postcss">

</style>
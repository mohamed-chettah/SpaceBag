<script setup lang="ts">
const props = defineProps({
  image : String,
  alt : String,
  smallTitle : String,
  title : String,
  description: String,
  smallDescription: String,
  reverse: Boolean
})
</script>

<template>
  <section>
    <div :class="reverse ? 'lg:flex-row-reverse flex-col-reverse' : 'lg:flex-row flex-col-reverse '" class="flex justify-center items-center xl:gap-52 lg:gap-40 gap-20 ">
      <NuxtImg class="xl:w-96 xl:h-96 sm:w-80 sm:h-80 w-72 h-72 rounded-md" :src="image" :alt="alt"  />
      <div class="flex flex-col gap-5 xl:max-w-md sm:max-w-xs max-w-[16rem] tracking-wide">
        <h3 class="text-[#C3C3C3]">{{ smallTitle }}</h3>
        <h4 class="xl:text-3xl text-2xl  font-serif">{{ title }}</h4>
        <p>{{ description }}</p>
        <div class="bg-primary/50 p-6 text-sm rounded-md mt-5 ">
          <p>{{ smallDescription }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">

</style>
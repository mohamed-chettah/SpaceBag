<script setup lang="ts">
const props = defineProps({
  image : String,
  alt : String,
  smallTitle : String,
  title : String,
  description: String,
  smallDescription: String,
})
</script>

<template>
  <section>
    <div class="flex xl:flex-row flex-col-reverse justify-center items-center xl:gap-52 gap-20 ">
      <NuxtImg class="w-96 h-96 rounded-md" :src="image" :alt="alt"  />
      <div class="flex flex-col gap-5 xl:w-1/5 w-[85%] tracking-wide">
        <h3 class="text-[#C3C3C3]">{{ smallTitle }}</h3>
        <h4 class="xl:text-3xl text-2xl  font-serif">{{ title }}</h4>
        <p>{{ description }}</p>
        <div class="bg-primary/50 p-6 text-sm rounded-md mt-5">
          <p>{{ smallDescription }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">

</style>
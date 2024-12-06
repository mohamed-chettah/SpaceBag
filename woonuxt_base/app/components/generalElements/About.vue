<script setup lang="ts">
</script>

<template>
  <div class="xl:grid xl:grid-cols-2 h-full grid-cols-1 ">
    <div class="flex flex-col gap-14 justify-center items-center rounded-none bg-[#CD8F6A] xl:py-0 py-20 xl:p-0 p-10 ">
      <p class="text-white text-center xl:text-xl text-wrap leading-10 tracking-wider xl:px-12 px-10">
        Que vous partiez à l’aventure dans les montagnes,
        travailliez depuis un café ou embarquiez pour un week-end à
        l’étranger, le SpaceBag est conçu pour suivre votre rythme. Léger, polyvalent et robuste, il est votre compagnon idéal
      </p>
      <UButton
          block
          to="/product/space-bag"
          color="white"
          variant="soft"
          class="px-2 bg-white w-1/2 hover:bg-primary/80 text-black dark:text-black hover:bg-white/70"
          size="lg"
      >
        Acheter le SpaceBag
      </UButton>
    </div>
    <NuxtImg
        class="w-full object-cover object-center"
        src="/images/spacebag/image_X-s.png"
        loading="lazy"
        alt="my-company-hero-image"/>
  </div>
</template>

<style scoped lang="postcss">

</style>
<script setup lang="ts">

</script>

<template>
  <div
      class="relative flex h-full min-h-dvh w-full items-center justify-center"
  >
    <!-- Background Image -->
    <NuxtImg
        class="absolute h-full w-full object-cover"
        src="/images/spacebag/banniere-bateau.png"
        loading="lazy"
        alt="my-hero-background"
        :placeholder="[50, 25, 75, 5]"
    />
    <!-- Overlay -->
    <div
        class="absolute top-0 left-0 h-full w-4/5 bg-gradient-to-r from-dark-950/70"
    />
    <div class="relative z-20 w-10/12">
      <div class="flex flex-col gap-4">
        <h1
            class="text-center text-5xl font-semibold text-white sm:text-6xl md:text-left md:text-7xl 2xl:text-8xl"
        >
          Le Compagnon <br />
          De Voyage <br />
          Ultime
        </h1>
        <div class="mt-4 mx-auto w-full sm:w-96 md:mx-0">
          <UButton
              block
              to="/product/space-bag"
              size="md"
              type="solid"
              color="primary"
              class="flex items-center justify-center gap-6 rounded-md"
              aria-label="Explore our proposals"
          >
            Passer à l'action
            <template #trailing>
              <UIcon name="i-heroicons-arrow-right" />
            </template>
          </UButton>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped lang="postcss">

</style>
<script setup lang="ts">
import CardSpacebag from "~/woonuxt_base/app/components/ui/cardSpacebag.vue";
</script>

<template>
  <section >
    <h3 class="text-center font-medium xl:text-3xl text-2xl">Le SpaceBag - Le Sac de vos rêves</h3>

    <div class=" flex md:flex-row flex-col xl:gap-0 gap-20 justify-center items-center mt-20">
      <CardSpacebag description="Compresser facilement et optimiser l’espace" icon="i-material-symbols-compress" />
      <CardSpacebag description="Conçu pour une utilisation intuitive" icon="i-material-symbols-touch-app" />
      <CardSpacebag description="Imperméable pour une durabilité optimale" icon="i-material-symbols-water-drop" />
    </div>
  </section>

</template>

<style scoped lang="postcss">

</style>
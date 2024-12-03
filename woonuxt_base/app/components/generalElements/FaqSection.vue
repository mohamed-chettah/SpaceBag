<script setup lang="ts">

const items = [
  {
    label: 'Qu\'est-ce que le Space Bag ?',
    icon: 'i-heroicons-question-mark-circle',
    defaultOpen: true,
    content: 'Le Space Bag est un sac conçu pour optimiser l\'espace lors de vos voyages grâce à un aspirateur vacuum intégré, permettant de réduire considérablement le volume de vos affaires.'
  },
  {
    label: 'Comment fonctionne l\'aspirateur vacuum intégré ?',
    icon: 'i-heroicons-square-3-stack-3d',
    content: 'L\'aspirateur vacuum est simple à utiliser. Placez vos vêtements dans le Space Bag, fermez le sac hermétiquement, puis utilisez l\'aspirateur pour retirer l\'air. Cela compresse les vêtements et libère de l\'espace dans vos bagages.'
  },
  {
    label: 'Quels types d\'affaires puis-je compresser avec le Space Bag ?',
    icon: 'i-heroicons-briefcase-solid',
    content: 'Vous pouvez compresser une grande variété de vêtements, comme des pulls, des vestes, des pantalons, et même des draps. Toutefois, il est déconseillé de compresser des articles délicats ou en cuir.'
  },
  {
    label: 'Est-ce que le Space Bag protège les vêtements de l\'humidité ?',
    icon: 'i-heroicons-shield-check-solid',
    content: 'Oui, le Space Bag est hermétique et protège vos vêtements de l\'humidité, de la poussière et des odeurs, garantissant que vos affaires restent propres et fraîches pendant le voyage.'
  },
  {
    label: 'Quels sont les différents usages du Space Bag ?',
    icon: 'i-heroicons-cube-transparent',
    content: 'Le Space Bag est idéal pour les voyages, le rangement à domicile, et même pour le stockage saisonnier de vêtements volumineux. Que vous souhaitiez gagner de la place dans vos valises, organiser votre placard ou protéger vos affaires de l\'humidité et de la poussière, le Space Bag est une solution polyvalente.'
  }
];

</script>

<template>

  <div class="bg-black/90">

    <div class="grid xl:grid-cols-2 grid-cols-1 xl:gap-0 gap-10 items-center">
      <NuxtImg
          class="w-full object-cover object-center"
          src="/images/spacebag/affaire.png"
          loading="lazy"
          alt="affaires posé au sol"/>
      <div class="mx-20 xl:pb-0 pb-20">
        <h3 class="text-[#C3C3C3] text-2xl xl:mt-0 mt-10">FAQ</h3>
        <UAccordion
            color="primary"
            variant="soft"
            size="md"
            class="my-10"
            :items="items"  />
      </div>

    </div>

    <div class="flex justify-center">

    </div>

  </div>

</template>

<style scoped>
</style>
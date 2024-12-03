<script setup lang="ts">

const items = [{
  label: 'Quels services offrons-nous exactement ?',
  icon: 'i-heroicons-question-mark-circle',
  defaultOpen: true,
  content: 'MC Studio dispose d’une expertise dans une gamme complète de services tels que la création de design, le développement d’applications et de site web et se charge de l’ensemble de la gestion, création et déploiement du projet. '
},
  {
    label: 'Que se passe-t-il si le design \n' + 'ne correspond pas à vos attentes ?',
    icon: 'i-heroicons-paint-brush-20-solid',
    content: "Pas d'inquiétude ! Nous révisons le design et apportons les ajustements nécessaires jusqu'à ce que vous soyez pleinement satisfait."
  },
  {
    label: 'Quelles technologies utilisons-nous \n' + 'pour développer vos projets ?',
    icon: 'i-heroicons-cog-8-tooth-20-solid',
    content: 'Nous utilisons les technologies les plus récentes pour garantir des solutions modernes et performantes. Nos sites web sont développés avec Nuxt.js pour le framework, Tailwind CSS pour le design et la mise en page, et GSAP pour les animations. Pour les applications, nous nous appuyons sur Laravel pour le backend et sur Nuxt/Vue.js pour le frontend.'
  },
  {
    label: 'Quel est le coût d’un projet ?',
    icon: 'i-mdi-square-inc-cash',
    content: 'Le prix d’un projet dépend de vos besoins, du temps nécessaire pour le développer et sa complexité.\n' +
        'Le devis est établi après une discussion téléphonique. Celui-ci sera toujours juste et personnalisé. Seuls les services dont vous avez besoin vous seront facturés.'
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
      <div class="mx-20">
        <h3 class="text-[#C3C3C3]">FAQ</h3>
        <UAccordion
            color="primary"
            variant="soft"
            size="md"
            class="mt-5"
            :items="items"  />
      </div>

    </div>

    <div class="flex justify-center">

    </div>

  </div>

</template>

<style scoped>
</style>
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

  <div class="bg-black/90 pt-20">

    <div class="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl top-[2500px] " aria-hidden="true">
      <div class="relative left-[calc(50%+3rem)] w-[36.125rem]
      -translate-x-1/2 bg-gradient-to-tr from-gold-200 to-white opacity-30
      sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>

    <div class="flex flex-col gap-4">
      <h3 class="md:text-6xl sm:text-5xl text-4xl text-center font-bold text-gold-200 xl:leading-[80px]">
        Foire à Questions
      </h3>

      <p class="text-center xl:text-xl text-md"> Les réponses aux questions que vous vous posez sûrement  </p>

    </div>

    <div class="flex justify-center">

      <UAccordion class="my-10 faq xl:w-[1000px] lg:w-[800px] md:w-[700px] sm:w-[600px] w-[350px] "
                  variant="soft"
                  color="#121212"
                  :ui=" {
                  default : {
                    class :  'tracking-wide lg:text-sm text-xs text-white bg-white-500 border-[1px] border-gold-200'
                    },
                    item : {
                    size : 'lg:text-[16px] text-xs',
                    base : 'tracking-wide font-bold leading-6',
                    icon : 'text-gold-200 dark:text-gold-200',
                    color: 'text-gold-200 dark:text-gold-200',
                  },
                    transition: {
                    enterActiveClass: 'overflow-hidden transition-[height] duration-200 ease-out',
                    leaveActiveClass: 'overflow-hidden transition-[height] duration-200 ease-out',
  },
                }"
                  size="xl"
                  :items="items"
      >
        <template #default="{ item, index, open }">
          <UButton variant="ghost" class="p-6 border-gold-200 border-[1px] mt-4 rounded-xl hover:text-primary xl:text-lg sm:text-md text-sm text-white hover:bg-transparent border-b " :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }">
            <template #leading>
              <div class="w-6 h-6 rounded-full mr-2 flex items-center justify-center -my-1">
                <UIcon :name="item.icon" class="w-5 h-5 text-white dark:text-gray-900" />
              </div>
            </template>

            <span class="truncate whitespace-normal">{{ item.label }}</span>
            <template #trailing>
              <UIcon
                  name="i-heroicons-chevron-right-20-solid"
                  class="w-5 h-5 ms-auto transform transition-transform duration-200"
                  :class="[open && 'rotate-90']"
              />
            </template>
          </UButton>
        </template>
      </UAccordion>

    </div>

  </div>

</template>

<style scoped>
</style>
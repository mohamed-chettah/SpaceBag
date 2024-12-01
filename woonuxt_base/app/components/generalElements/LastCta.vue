<template>
  <div
      class="mt-20 bg-[#CD8F6A] py-5 relative flex h-auto w-full flex-col items-center justify-start gap-y-12 rounded-2xl bg-gradient-to-r px-4 md:h-auto md:px-8 lg:rounded-3xl lg:px-0"
  >
    <div class="w-full p-0 lg:pl-12">
      <div class="relative z-10 flex w-full flex-col gap-y-4">
        <UBadge
            size="lg"
            color="neutral"
            class="text-dark-50/50 dark:text-dark-50/50 bg-transparent font-serif"
        >
          Changez votre façon de voyager avec le SpaceBag.
        </UBadge>
        <h1
            class="text-dark-50/80 dark:text-dark-50 font-serif text-4xl md:text-5xl"
        >
          Voyagez plus léger, <br />
          <span class="font-instrument text-dark-50 italic">
           Avec plus de liberté
          </span>
          <br />
          Adoptez la révolution.
        </h1>
        <div class="mt-4 flex w-full flex-col sm:w-1/3 2xl:w-1/5">
          <UButton
              block
              to="#"
              color="white"
              variant="soft"
              class="px-6 bg-white"
              size="lg"
          >
            Prenez votre SpaceBag maintenant
          </UButton>
        </div>
      </div>
    </div>
    <div
        class="relative bottom-0 h-[420px] w-full overflow-hidden rounded-3xl lg:absolute lg:right-12 lg:w-[520px] lg:rounded-t-3xl lg:rounded-b-none"
    >
      <NuxtImg
          class="h-full w-full object-cover object-center"
          src="/images/spacebag/image_Gbt.png"     />
    </div>
  </div>
</template>

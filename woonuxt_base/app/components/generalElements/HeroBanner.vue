<template>
  <div class="relative h-auto w-full bg-white">
    <div
        class="2xl:max-w-screen-2xl mx-auto grid h-full min-h-dvh w-full grid-cols-2 items-center justify-center gap-4 px-4"
    >
      <div class="relative col-span-full mt-28 lg:col-span-1">
        <div class="flex flex-col items-center justify-center lg:items-start">
          <h1
              class="w-full text-center font-sans text-4xl font-semibold leading-10  bg-gradient-to-r from-tumbleweed-900 via-tumbleweed-500 to-tumbleweed-200 bg-clip-text text-transparent sm:text-5xl md:w-10/12 lg:w-full lg:text-left lg:text-6xl dark:text-dark-100"
          >
            Compactez vos affaires Libérez de l'espace
          </h1>
          <p
              class="text-gray-500 mt-4 w-full text-center text-lg leading-8 md:w-1/2 lg:w-3/5 lg:text-left 2xl:text-xl"
          >
            Faites de vos voyages une expériences extraordinaire grâce au SpaceBag.
          </p>
          <div
              class="mt-4 flex w-full flex-col-reverse items-center justify-center gap-4 lg:flex-row-reverse lg:justify-end"
          >
            <UButton variant="solid" to="https://space-bag.vercel.app/product/space-bag" size="lg" class="text-white bg-[#CD8F6A]">
              Acheter maintenant
            </UButton>
          </div>
        </div>
      </div>
      <div class="relative col-span-full mt-4 lg:col-span-1">
        <NuxtImg
            class="max-h-[420px] w-full rounded-lg object-cover object-center lg:max-h-[720px]"
            src="/images/spacebag/image_TLY.png"
            loading="lazy"
            alt="my-company-hero-image"
            :placeholder="[50, 25, 75, 5]"
        />
      </div>
    </div>
  </div>
</template>

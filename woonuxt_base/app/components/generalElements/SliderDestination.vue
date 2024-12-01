<template>
  <div
      class="relative flex h-full min-h-dvh w-full flex-col items-center justify-center bg-dark-50 pt-32 pb-4 xl:pt-24 dark:bg-dark-950"
  >
    <div class="relative z-20 grid w-full grid-cols-12 gap-y-12 md:gap-y-24">
      <div class="col-span-full flex flex-col items-start justify-center px-4">
        <h1
            class="mt-4 w-full text-center font-sans text-5xl font-light text-dark-900 md:text-7xl dark:text-dark-50"
        >
          Voyagez de partout avec le SpaceBag
        </h1>
        <p
            class="mt-4 w-full text-center text-lg leading-8 text-dark-900/60 2xl:text-xl dark:text-dark-50/60"
        >
          Un sac. Mille destinations.
        </p>
      </div>
      <div class="col-span-full">
        <div class="flex w-full flex-col gap-4">
          <NuxtMarquee :pauseOnHover="true" direction="right">
            <div
                class="flex w-full items-center justify-center gap-4 first:ml-0 xl:justify-between xl:first:ml-4"
            >
              <template v-for="(f_image, index) in imagesFirst" :key="index">
                <NuxtImg
                    class="size-48 object-cover object-center xl:size-52"
                    :src="f_image"
                    loading="lazy"
                    alt="my-photo-work"
                    :placeholder="[50, 25, 75, 5]"
                />
              </template>
            </div>
          </NuxtMarquee>
          <NuxtMarquee :pauseOnHover="true" direction="left">
            <div
                class="flex w-full items-center justify-center gap-4 first:ml-4 xl:first:ml-4"
            >
              <template v-for="(f_image, index) in imagesSecond" :key="index">
                <NuxtImg
                    class="size-48 object-cover object-center xl:size-52"
                    :src="f_image"
                    loading="lazy"
                    alt="my-photo-work"
                    :placeholder="[50, 25, 75, 5]"
                />
              </template>
            </div>
          </NuxtMarquee>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const imagesFirst = [
  "https://images.unsplash.com/photo-1557802891-958ecf3d5992?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1560135874-bb540cdd5929?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559926431-73aebfacd993?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559762412-627400abeec1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1560065569-21beb63d2b0c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559666126-84f389727b9a?q=80&w=1754&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const imagesSecond = [
    "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dm95YWdlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dm95YWdlfGVufDB8fDB8fHwy",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dm95YWdlfGVufDB8fDB8fHwy",
    "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dm95YWdlfGVufDB8fDB8fHwy",
    "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHZveWFnZXxlbnwwfHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZveWFnZXxlbnwwfHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZveWFnZXxlbnwwfHwwfHx8Mg%3D%3D"
];
</script>

<script setup lang="ts">
</script>

<template>
  <nav class="lg:text-white text-black">
    <NuxtLink class="" to="/">{{ $t('messages.general.home') }}</NuxtLink>
    <NuxtLink class="" to="/product/space-bag">The SpaceBag</NuxtLink>
    <NuxtLink class="" to="/contact">{{ $t('messages.general.contact') }}</NuxtLink>
    <NuxtLink class=" lg:hidden" to="/my-account" :prefetch="false">Mon Compte</NuxtLink>
  </nav>
</template>

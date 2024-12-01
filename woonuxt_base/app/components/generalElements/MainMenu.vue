<script setup lang="ts">
const { wishlistLink } = useAuth();
</script>

<template>
  <nav>
    <NuxtLink class="text-white" to="/">{{ $t('messages.general.home') }}</NuxtLink>
    <NuxtLink class="text-white" to="/product/space-bag">The SpaceBag</NuxtLink>
    <NuxtLink class="text-white" to="/contact">{{ $t('messages.general.contact') }}</NuxtLink>
    <NuxtLink class="text-white lg:hidden" to="/my-account" :prefetch="false">Mon Compte</NuxtLink>
  </nav>
</template>

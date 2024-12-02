<script lang="ts" setup>
import { ProductsOrderByEnum } from '#woo';
const { siteName, description, shortDescription, siteImage } = useAppConfig();

const { data } = await useAsyncGql('getProductCategories', { first: 6 });
const productCategories = data.value?.productCategories?.nodes || [];

const { data: productData } = await useAsyncGql('getProducts', { first: 5, orderby: ProductsOrderByEnum.POPULARITY });
const popularProducts = productData.value.products?.nodes || [];

useSeoMeta({
  title: `Home`,
  ogTitle: siteName,
  description: description,
  ogDescription: shortDescription,
  ogImage: siteImage,
  twitterCard: `summary_large_image`,
});
</script>

<template>
  <main class="flex flex-col gap-32">
    <HeroBanner />

    <WhySpacebag />

    <AdvancedCard image="/images/spacebag/vaccuum.png" alt="aspirateur pour sac" smallTitle="Aspiration" title="Aspirez l'air, gagnez de l'espace" description="L'aspirateur intégré au SpaceBag utilise une technologie puissante pour retirer l'air de vos vêtements, réduisant leur volume de manière significative. Il permet un rangement optimisé et protège vos affaires pendant vos voyages." smallDescription="Une solution compacte et révolutionnaire pour tous vos déplacements." />

    <SliderDestination />

    <Features />

    <About />

    <FaqSection />

    <LastCta />

  </main>
</template>

<style scoped>
.brand img {
  max-height: min(8vw, 120px);
  object-fit: contain;
  object-position: center;
}
</style>

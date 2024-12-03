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

    <AdvancedCard
        :reverse="true"
        image="/images/spacebag/2.png"
        alt="aspirateur pour sac"
        smallTitle="Facilité d'utilisation"
        title="Simplifiez votre rangement, gagnez de l'espace"
        description="Le SpaceBag est conçu pour une utilisation simple et intuitive. Grâce à son aspirateur intégré, il réduit le volume de vos vêtements en un rien de temps, vous permettant de gagner de l'espace de manière efficace sans effort supplémentaire."
        smallDescription="Profitez d'une solution facile à utiliser et idéale pour des voyages sans encombre."
    />


    <AdvancedCard
        image="/images/spacebag/water.png"
        alt="matériau résistant à l'eau"
        smallTitle="Étanchéité"
        title="Protégez vos affaires contre l'eau et l'humidité"
        description="Le SpaceBag est conçu avec un matériau résistant à l'eau, garantissant une protection optimale de vos effets personnels. Que ce soit sous la pluie ou en cas de conditions humides, vos affaires restent sèches et bien protégées."
        smallDescription="Une protection fiable contre l'humidité pour des voyages sans souci."
    />

    <SliderDestination />

    <About />

    <Features />

    <CoverCard />

    <div>
      <FaqSection />
    </div>

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

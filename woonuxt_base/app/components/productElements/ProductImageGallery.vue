<script setup lang="ts">
const { FALLBACK_IMG } = useHelpers();

const props = defineProps({
  mainImage: { type: Object, required: true },
  gallery: { type: Object, required: true },
  node: { type: Object as PropType<Product>, required: true },
  activeVariation: { type: Object, required: false },
});

const primaryImage = computed(() => ({
  sourceUrl: props.mainImage.sourceUrl || FALLBACK_IMG,
  title: props.mainImage.title,
  altText: props.mainImage.altText,
  databaseId: props.mainImage.databaseId,
}));

const imageToShow = ref(primaryImage.value);

const galleryImages = computed(() => {
  return [primaryImage.value, ...props.gallery.nodes].filter((img, index, self) => index === self.findIndex((t) => t?.databaseId === img?.databaseId));
});

const changeImage = (image: any) => {
  if (image) imageToShow.value = image;
};

watch(
  () => props.activeVariation,
  (newVal) => {
    if (newVal?.image) {
      const foundImage = galleryImages.value.find((img) => img.databaseId === newVal.image?.databaseId);
      if (foundImage) imageToShow.value = foundImage;
    }
  },
);

const imgWidth = 640;
</script>

<template>

  <div class="flex xl:flex-row flex-col gap-10">
    <div v-if="gallery.nodes.length" class="gallery-images">
      <NuxtImg
          v-for="galleryImg in galleryImages"
          :key="galleryImg.databaseId"
          class="cursor-pointer rounded-xl"
          :class="galleryImg.databaseId === imageToShow.databaseId ? 'border-2 border-primary' : 'border-2 border-transparent'"
          :width="imgWidth"
          :height="imgWidth"
          :src="galleryImg.sourceUrl"
          :alt="galleryImg.altText || node.name"
          :title="galleryImg.title || node.name"
          placeholder
          placeholder-class="blur-xl"
          loading="lazy"
          @click.native="changeImage(galleryImg)" />
    </div>
    <SaleBadge :node class="absolute text-base top-4 right-4" />
    <NuxtImg
      class="rounded-lg w-full object-cover"
      :width="imgWidth"
      :height="imgWidth"
      :alt="imageToShow.altText || node.name"
      :title="imageToShow.title || node.name"
      :src="imageToShow.sourceUrl || FALLBACK_IMG"
      fetchpriority="high"
      placeholder
      placeholder-class="blur-xl" />

  </div>
</template>

<style scoped>
.gallery-images {
  overflow: auto;
  gap: 1rem;
  display: flex;
  flex-direction: row;

  &::-webkit-scrollbar {
    display: none;
  }
}

.gallery-images img {
  width: 72px;
  aspect-ratio: 5/6;
  object-fit: cover;
}

@media (min-width: 768px) {
  .gallery-images {
    display: flex;
    flex-direction: column;
    img {
      width: 120px !important;
    }
  }
}
</style>

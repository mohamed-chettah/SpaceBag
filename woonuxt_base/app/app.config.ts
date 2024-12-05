/**
 * App configuration.
 * This file is used to configure the app settings.
 * Below are the default values.
 */
export default defineAppConfig({
  siteName: 'SpaceBag',
  shortDescription: 'Le SpaceBag révolutionne vos déplacements avec sa technologie de compression et son design élégant.',
  description: `Le SpaceBag est conçu pour les voyageurs modernes en quête de praticité et de style. Grâce à sa technologie de compression avancée, ce sac vous permet de gagner de la place tout en restant organisé. Fabriqué avec des matériaux robustes et un design ergonomique, il offre une expérience unique pour tous vos déplacements, qu'ils soient professionnels ou personnels. Transformez vos voyages avec le SpaceBag dès aujourd'hui.`,
  baseUrl: 'https://spacebag.fr',
  siteImage: '/spacebag/cover/hero-section.png',
  storeSettings: {
    autoOpenCart: false,
    showReviews: true,
    showFilters: true,
    showOrderByDropdown: true,
    showSKU: true,
    showRelatedProducts: true,
    showProductCategoriesOnSingleProduct: true,
    showBreadcrumbOnSingleProduct: false,
    showMoveToWishlist: false,
    hideBillingAddressForVirtualProducts: false,
    initStoreOnUserActionToReduceServerLoad: true,
    saleBadge: 'percent', // 'percent', 'onSale' or 'hidden'
  },
});

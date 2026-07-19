// Design System Constants
export const COLORS = {
  cream: '#FCFBF5',
  white: '#FFFFFF',
  navy: '#1C2A44',
  gold: '#D6B25E',
  magenta: '#D72C8F',
} as const;

// External Links (TODO: Update with actual values when available)
export const LINKS = {
  appStore: 'https://theartofpausing.app', // TODO: Update with App Store URL when available
  artOfPausingWebsite: 'https://theartofpausing.app',
  artOfPausingMembership: 'https://theartofpausing.app#membership',
  artGallery: 'https://katiecooperart.com/collections/all',
  instagram: 'https://instagram.com/the_intuitive_creator',
  facebook: 'https://www.facebook.com/katie.cooper.507',
  shopifyStore: 'https://katiecooperart.com',
  activationDeckProduct: 'https://katiecooperart.com/products/the-power-in-the-pause-activation-deck',
  journalAmazonProduct: '', // TODO: Add Power In The Pause Journal Amazon product URL when available
} as const;

// Shopify Configuration
export const SHOPIFY = {
  storeDomain: 'ig24fr-47.myshopify.com',
  shopId: '91852374390',
  // TODO: Add Storefront API access token when available from Katie's Shopify admin
  storefrontAccessToken: '', 
  products: {
    activationDeck: {
      id: '15633233969526',
      variantId: '57393671143798',
      price: '£28.00',
    },
  },
} as const;

// Contact & Forms (TODO: Update with actual values)
export const CONTACT = {
  email: '', // TODO: e.g., hello@thepowerinthepause.co.uk
  bookingUrl: '', // TODO: Booking / calendar URL for "Book a Conversation"
  formServiceEndpoint: '', // TODO: Formspree/Web3Forms/Kit endpoint for contact form
  emailCaptureEndpoint: '', // TODO: Kit/ConvertKit endpoint for Spiral Shift
  audioMailingListEndpoint: '', // TODO: Kit/ConvertKit endpoint for Free Audio Practices waitlist
} as const;

// Registered Trademarks
export const TRADEMARKS = {
  masterBrand: 'Power In The Pause®',
  artOfPausing: 'The Art of Pausing®',
  coachingProgramme: 'The Pause to Power Pathway®',
  emotionalBioharmonising: 'Emotional Bioharmonising®',
  spiralShift: 'Spiral Shift®',
  pausePortal: 'The Pause Portal™',
  threeMinuteShift: '3-Minute Shift®',
} as const;

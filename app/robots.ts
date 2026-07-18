import { MetadataRoute } from 'next';

export const revalidate = 86400; // 24 hours

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://thepowerinthepause.co.uk/sitemap.xml',
  };
}

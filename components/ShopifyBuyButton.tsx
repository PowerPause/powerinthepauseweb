'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { SHOPIFY, LINKS } from '@/lib/constants';

// ---------------------------------------------------------------------------
// Minimal type declarations for the Shopify Buy Button JS SDK.
// The SDK is loaded dynamically at runtime and has no published @types package.
// ---------------------------------------------------------------------------
interface ShopifyBuyClientConfig {
  domain: string;
  storefrontAccessToken: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ShopifyBuyClient {}

interface ShopifyBuyUI {
  createComponent: (type: string, options: Record<string, unknown>) => void;
}

interface ShopifyBuySDK {
  buildClient: (config: ShopifyBuyClientConfig) => ShopifyBuyClient;
  UI: {
    onReady: (client: ShopifyBuyClient) => Promise<ShopifyBuyUI>;
  };
}

declare global {
  interface Window {
    ShopifyBuy?: ShopifyBuySDK;
  }
}

// ---------------------------------------------------------------------------
// Component props
// ---------------------------------------------------------------------------
interface ShopifyBuyButtonProps {
  /** Shopify product ID (numeric string) */
  productId: string;
  /** DOM id of the container element that the SDK will mount into.
   *  Must be hardcoded by the caller - never user-supplied input. */
  containerId: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function ShopifyBuyButton({
  productId,
  containerId,
}: ShopifyBuyButtonProps) {
  const initializedRef = useRef(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Cast needed because the constant is typed as the literal "" by `as const`.
  const storefrontToken: string = SHOPIFY.storefrontAccessToken;

  useEffect(() => {
    if (!scriptLoaded || initializedRef.current || !window.ShopifyBuy) return;

    initializedRef.current = true;

    const client = window.ShopifyBuy.buildClient({
      domain: SHOPIFY.storeDomain,
      storefrontAccessToken: storefrontToken,
    });

    window.ShopifyBuy.UI.onReady(client)
      .then((ui) => {
        const node = document.getElementById(containerId);
        if (!node) return;

        ui.createComponent('product', {
          id: productId,
          node,
          moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
          options: {
            product: {
              styles: {
                button: {
                  'background-color': '#D72C8F',
                  ':hover': { 'background-color': '#b52478' },
                  ':focus': { 'background-color': '#b52478' },
                },
                price: {
                  'font-family': '"Cormorant Garamond", serif',
                  color: '#1C2A44',
                },
                title: {
                  'font-family': '"Cormorant Garamond", serif',
                  color: '#1C2A44',
                },
              },
              text: { button: 'Add to Cart' },
            },
            cart: {
              styles: {
                button: {
                  'background-color': '#D72C8F',
                  ':hover': { 'background-color': '#b52478' },
                },
              },
            },
          },
        });
      })
      .catch(() => {
        // SDK initialisation failure is handled silently.
        // The page remains functional; user can still click the direct shop link.
      });
  }, [scriptLoaded, productId, containerId, storefrontToken]);

  // ------------------------------------------------------------------
  // Fallback UI - shown when the Storefront API token is not yet set.
  // Provides a direct link so the page is never broken for the visitor.
  // ------------------------------------------------------------------
  if (!storefrontToken) {
    return (
      <div
        style={{
          backgroundColor: '#FCFBF5',
          border: '1px solid #C6A55C',
          padding: '24px',
          borderRadius: '4px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            color: '#1C2A44',
            marginBottom: '12px',
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.1rem',
          }}
        >
          Product available soon. Add to cart functionality requires Shopify
          configuration.
        </p>
        <a
          href={LINKS.activationDeckProduct}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#D72C8F',
            textDecoration: 'underline',
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1rem',
          }}
        >
          Buy on Katie&apos;s Shop ↗
        </a>
      </div>
    );
  }

  // ------------------------------------------------------------------
  // Full SDK integration - rendered only when token is present.
  // Script uses lazyOnload to avoid blocking initial render.
  // ------------------------------------------------------------------
  return (
    <>
      <Script
        src="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js"
        strategy="lazyOnload"
        onLoad={() => setScriptLoaded(true)}
      />
      <div id={containerId} />
    </>
  );
}

'use client';

import { useEffect, useRef } from 'react';

interface KitFormEmbedProps {
  uid: string;
  src: string;
}

// Kit's embed script relies on finding a `<script data-uid>` tag at its exact
// DOM position and replacing it in place. Next.js's <Script> component moves
// scripts elsewhere in the document, which breaks that placement logic, so
// this inserts the script element manually at the position it's rendered.
export function KitFormEmbed({ uid, src }: KitFormEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const script = document.createElement('script');
    script.async = true;
    script.dataset.uid = uid;
    script.src = src;
    container.appendChild(script);

    return () => {
      container.innerHTML = '';
    };
  }, [uid, src]);

  return <div ref={containerRef} />;
}

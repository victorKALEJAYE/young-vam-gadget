'use client';

import dynamic from 'next/dynamic';

// WebGL only runs in the browser, so the 3D scene skips server rendering.
const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false });

export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <video className="bg-video" src="/store.mp4" poster="/poster.jpg" autoPlay muted loop playsInline />
      <div className="bg-tint" />
      <div className="bg-grid" />
      <div className="bg-scene">
        <Scene3D />
      </div>
    </div>
  );
}

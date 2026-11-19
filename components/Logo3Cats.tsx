import Image from 'next/image';

// Official 3CATS logo (transparent PNG, trimmed to content).
// Source file: public/brand/3cats-logo.png — 1192 × 340 px.
const LOGO_SRC = '/brand/3cats-logo.png';
const LOGO_WIDTH = 1192;
const LOGO_HEIGHT = 340;

type Logo3CatsProps = {
  /** Rendered height in px; width follows the logo's aspect ratio. */
  height?: number;
  /** Load eagerly (use for the above-the-fold navbar logo). */
  priority?: boolean;
};

export default function Logo3Cats({ height = 40, priority = false }: Logo3CatsProps) {
  const width = Math.round((height * LOGO_WIDTH) / LOGO_HEIGHT);
  return (
    <Image
      src={LOGO_SRC}
      alt="3CATS — Software Development & Project Delivery"
      width={width}
      height={height}
      priority={priority}
      sizes={`${width}px`}
      style={{ display: 'block', width: `${width}px`, height: `${height}px` }}
    />
  );
}

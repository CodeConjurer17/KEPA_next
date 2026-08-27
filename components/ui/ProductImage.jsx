"use client";

import { useState } from "react";
import Image from "next/image";
import "./styles/ProductImage.css";

/**
 * Shared image + placeholder-fallback for product photos.
 * Renders a textured placeholder if no src is given, or if the image fails to load.
 *
 * <ProductImage src={product.image} alt={product.title} />
 */
export default function ProductImage({ src, alt, priority = false }) {
  const [errored, setErrored] = useState(false);
  const showPlaceholder = !src || errored;

  return (
    <div className="productImage">
      {showPlaceholder ? (
        <div className="productImage__placeholder" aria-hidden="true" />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          priority={priority}
          className="productImage__img"
          onError={() => setErrored(true)}
        />
      )}
    </div>
  );
}
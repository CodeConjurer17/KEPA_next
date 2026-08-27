"use client";
import { useState } from "react";
import Link from "next/link";
import ProductImage from "../ui/ProductImage";
import "./styles/ItemDetail.css";

export default function ItemDetail({ product }) {
  const {
    title,
    price,
    oldPrice,
    type,
    occasions = [],
    color,
    size,
    sale,
    description,
    images = [],
  } = product;

  const [activeImage, setActiveImage] = useState(images[0] ?? null);

  return (
    <section className="itemDetail">
      <div className="itemDetail-overlay" />

      <div className="container itemDetail__container">

        <Link href="/shop" className="itemDetail__back">
          ← Nazaj na izdelke
        </Link>

        <div className="itemDetail__layout">

          {/* ── Image + thumbnails ── */}
          <div className="itemDetail__media">
            {sale && <span className="itemDetail__badge">Znižano</span>}
            <ProductImage src={activeImage} alt={title} priority />

            {images.length > 1 && (
              <div className="itemDetail__thumbnails">
                {images.map((img, i) => (
                  <button
                    key={img + i}
                    type="button"
                    className={`itemDetail__thumb ${img === activeImage ? "is-active" : ""}`}
                    onClick={() => setActiveImage(img)}
                    aria-label={`Prikaži sliko ${i + 1}`}
                  >
                    <ProductImage src={img} alt={`${title} - slika ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Info ── */}
          <div className="itemDetail__info">
            <p className="itemDetail__category">{type}</p>
            <h1 className="itemDetail__title">{title}</h1>

            <div className="itemDetail__prices">
              {oldPrice ? (
                <>
                  <span className="itemDetail__oldPrice">€{oldPrice.toFixed(2)}</span>
                  <span className="itemDetail__price">€{price.toFixed(2)}</span>
                </>
              ) : (
                <span className="itemDetail__price">€{price.toFixed(2)}</span>
              )}
            </div>

            {description && (
              <p className="itemDetail__description" style={{ whiteSpace: "pre-line" }}>
                {description}
              </p>
            )}

            <dl className="itemDetail__specs">
              {color && (
                <div className="itemDetail__spec">
                  <dt>Barva</dt>
                  <dd>{color}</dd>
                </div>
              )}
              {size && (
                <div className="itemDetail__spec">
                  <dt>Velikost</dt>
                  <dd>{size}</dd>
                </div>
              )}
            </dl>

            {occasions.length > 0 && (
              <div className="itemDetail__occasions">
                <h3>Primerno za</h3>
                <ul className="itemDetail__occasionList">
                  {occasions.map((o) => (
                    <li key={o} className="itemDetail__occasionPill">{o}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { PRODUCTS } from "../../models/Product";
import "./styles/CategoryCarousel.css";

const unique = (arr) => Array.from(new Set(arr));

// same tint cycle used for the shop page's placeholder tiles, so the
// two pages read as part of the same visual system
const TINTS = ["tint-sage", "tint-accent", "tint-neutral"];

const AUTO_SCROLL_SPEED = 0.4;

export default function CategoryCarousel() {
  const categories = unique(PRODUCTS.map((p) => p.top));
  const loopCategories = [...categories, ...categories, ...categories]; // triple, so a short category list still loops smoothly

  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frameId;

    const tick = () => {
      if (!pausedRef.current && !draggingRef.current) {
        track.scrollLeft += AUTO_SCROLL_SPEED;
        const oneSet = track.scrollWidth / 3;
        if (track.scrollLeft >= oneSet * 2) {
          track.scrollLeft -= oneSet;
        }
      }
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const handleMouseEnter = () => (pausedRef.current = true);
  const handleMouseLeave = () => {
    pausedRef.current = false;
    draggingRef.current = false;
  };

  const handlePointerDown = (e) => {
    draggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartScrollRef.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = "grabbing";
  };

  const handlePointerMove = (e) => {
    if (!draggingRef.current) return;
    const delta = e.clientX - dragStartXRef.current;
    trackRef.current.scrollLeft = dragStartScrollRef.current - delta;
  };

  const stopDragging = () => {
    draggingRef.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };

  return (
    <section className="catFlow-section">
      <div className="catFlow-header">
        <span className="catFlow-eyebrow">Brskaj po kategoriji</span>
        <h2>Kaj iščeš?</h2>
      </div>

      <div
        className="catFlow-track"
        ref={trackRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
      >
        {loopCategories.map((c, i) => (
          <Link
            href={`/shop?category=${encodeURIComponent(c)}`}
            className="catFlow-tile"
            key={`${c}-${i}`}
            draggable={false}
          >
            <div className={`catFlow-circle ${TINTS[i % TINTS.length]}`} />
            <span className="catFlow-label">{c}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
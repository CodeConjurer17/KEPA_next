"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { IconArrowRight } from "./icons/Icons";
import "./styles/NewCarousel.css";

const AUTO_SCROLL_SPEED = 0.5; // px per frame, slow continuous drift

export default function NewCarousel({ items }) {
  const loopItems = [...items, ...items]; // duplicated so the strip can loop seamlessly

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
        const half = track.scrollWidth / 2;
        if (track.scrollLeft >= half) track.scrollLeft -= half;
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
    <section id="new" className="flow-section">
      <div className="flow-header">
        <h2>Novo v ponudbi</h2>
        <p>Najbolj sveži izdelki - poglej si, kaj je novega.</p>
      </div>

      <div
        className="flow-track"
        ref={trackRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
      >
        {loopItems.map((item, i) => (
          <Link
            href={`/shop/${item.id}`}
            className="flow-card"
            key={`${item.id}-${i}`}
            draggable={false}
          >
            <div className="flow-img-wrap">
              <img src={item.images?.[0]} alt={item.title} draggable={false} loading="lazy" />
              <span className="flow-badge">Novo</span>
            </div>
            <div className="flow-info">
              <span className="flow-category">{item.type}</span>
              <p className="flow-name">{item.title}</p>
              <p className="flow-price">{item.price.toFixed(2)} €</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flow-footer">
        <Link href="/shop" className="flow-footer-link">
          Vsi izdelki <IconArrowRight />
        </Link>
      </div>
    </section>
  );
}
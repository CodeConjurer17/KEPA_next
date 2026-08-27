"use client";
import { useEffect, useRef, useState } from "react";
import "./styles/Faq.css";

const ITEMS = [
  {
    q: "Kako dolgo traja izdelava?",
    a: "Večina izdelkov je narejena v 2-5 delovnih dneh. Če je izdelek že na zalogi, je lahko odposlan še isti ali naslednji dan.",
  },
  {
    q: "Ali lahko naročim izdelek po meri?",
    a: "Seveda! Piši mi preko kontaktnega obrazca ali Instagrama in skupaj bova našli popolno rešitev zate.",
  },
  {
    q: "Kam dostavljate?",
    a: "Trenutno dostavljam po Sloveniji. Za tujino me prosim kontaktiraj posebej.",
  },
  {
    q: "Kateri načini plačila so na voljo?",
    a: "Sprejemam bančno nakazilo in plačilo po povzetju. Kmalu tudi kartice.",
  },
];

function AccordionItem({ item, index, isOpen, onToggle }) {
  const bodyRef = useRef(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    el.style.height = isOpen ? el.scrollHeight + "px" : "0px";
  }, [isOpen]);

  return (
    <div className="accordion-item faq-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button faq-button ${isOpen ? "" : "collapsed"}`}
          type="button"
          onClick={() => onToggle(index)}
        >
          {item.q}
        </button>
      </h2>
      <div ref={bodyRef} className="faq-collapse">
        <div className="accordion-body faq-body">{item.a}</div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-overlay" />
      <div className="container faq-container">
        <div className="row align-items-center g-4 g-lg-5">

          <div className="col-12 col-lg-7">
            <div className="faq-header d-lg-none">
              <h2 className="faq-title">Pogosta vprašanja</h2>
              <p className="faq-subtitle">Klikni za odgovor.</p>
            </div>

            <div className="accordion faq-accordion">
              {ITEMS.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  item={item}
                  index={i}
                  isOpen={open === i}
                  onToggle={(idx) => setOpen(open === idx ? null : idx)}
                />
              ))}
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="faq-visual">
              <div className="faq-circle" aria-hidden="true">
                <img className="faq-circle-img" src="/assets/question2.jpg" alt="" />
                <div className="faq-circle-overlay">
                  <span className="faq-circle-q">?</span>
                </div>
              </div>
              <div className="faq-visual-text">
                <h2 className="faq-title d-none d-lg-block">Pogosta vprašanja</h2>
                <p className="faq-subtitle">
                  Če ne najdeš odgovora, me kontaktiraj. Z veseljem pomagam.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
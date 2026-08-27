"use client";
import { useState, useEffect, useCallback } from "react";
import "./styles/Comments.css";

const REVIEWS = [
  { text: "Absolutno navdušena! Izdelek je bil narejen z veliko ljubezni in pozornostjo do detajlov.", author: "Maja K." },
  { text: "Hitro dostavljeno in lepo zapakirano. Podarila sem prijateljici in bila je navdušena.", author: "Tina P." },
  { text: "Unikatni izdelki, ki jih ne najdeš nikjer drugje. Definitivno priporočam!", author: "Sara M." },
  { text: "Kakovost je izjemna, čutiti je, da je vsak kos narejen z dušo. Naročila bom še.", author: "Nina V." },
  { text: "Všeč mi je, da je vse ročno izdelano. Prejela sem točno to, kar sem si želela.", author: "Anja B." },
];

export default function Comments() {
  const [current, setCurrent] = useState(0);
  const [timer, setTimer] = useState(null);

  const resetTimer = useCallback(() => {
    if (timer) clearInterval(timer);
    const newTimer = setInterval(() => {
      setCurrent((c) => (c + 1) % REVIEWS.length);
    }, 4000);
    setTimer(newTimer);
  }, [timer]);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % REVIEWS.length);
    }, 4000);
    setTimer(t);
    return () => clearInterval(t);
  }, []);

  const goTo = (i) => {
    setCurrent(i);
    resetTimer();
  };

  const prev = () => goTo((current - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => goTo((current + 1) % REVIEWS.length);

  return (
    <section className="comments">
      <button className="comments__arrow comments__arrow--left" onClick={prev} aria-label="Prejšnja">‹</button>
      <div className="comments__inner">
        <div className="comments__quote">❝</div>
        <p className="comments__text">{REVIEWS[current].text}</p>
        <p className="comments__author">— {REVIEWS[current].author}</p>
        <div className="comments__dots">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              className={`comments__dot ${i === current ? "comments__dot--active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
      <button className="comments__arrow comments__arrow--right" onClick={next} aria-label="Naslednja">›</button>
    </section>
  );
}
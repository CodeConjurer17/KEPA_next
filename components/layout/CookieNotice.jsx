"use client";
import { useEffect, useState } from "react";
import "./styles/CookieNotice.css";

const STORAGE_KEY = "kepa-cookie-notice-dismissed";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // only show once — remembers dismissal so it doesn't nag on every
    // refresh forever. Remove the localStorage check below if you'd
    // rather it show on every single page load/refresh instead.
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookieNotice" role="status">
      <p className="cookieNotice__text">
        Ta spletna stran ne uporablja piškotkov za sledenje ali oglaševanje.
      </p>
      <button className="cookieNotice__close" onClick={dismiss} aria-label="Zapri obvestilo">
        Razumem
      </button>
    </div>
  );
}
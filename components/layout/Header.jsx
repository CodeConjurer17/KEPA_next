"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import IconButton from "../ui/IconButton";
import {
  IconInstagram,
  IconFacebook,
  IconMenu,
  IconClose,
  IconHome,
  IconGift,
  IconInfo,
  IconHelp,
} from "./icons/Icons";
import "./styles/Header.css";

// Edit paths here to match your routes — labels come straight from the brief.
const LINKS = [
  { to: "/", label: "Domov", end: true, icon: <IconHome /> },
  { to: "/shop", label: "Izdelki", icon: <IconGift /> },
  { to: "/#about", label: "O meni", icon: <IconInfo /> },
  { to: "#faq", label: "FAQ", icon: <IconHelp /> },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // hide header on scroll down, reveal it on scroll up
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrolledDown = currentY > lastScrollY.current;
      const pastThreshold = currentY > 120; // don't hide right at the top of the page

      setHidden(scrolledDown && pastThreshold && !open);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  const isActive = (to, end) => (end ? pathname === to : pathname.startsWith(to));

  return (
    <header className={`navbar${hidden ? " navbar--hidden" : ""}`}>
      <div className="navbar__topbar" />

      <div className="navbar__inner">
        <Link href="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <img
            src="/assets/icon/Barva2.png"
            alt="Ustvarjalnica KEPA"
            className="navbar__logo"
          />
          <div className="navbar__brand-text">
            <span className="navbar__title">Ustvarjalnica KEPA</span>
            <span className="navbar__tagline">Ročno izdelano, z ljubeznijo</span>
          </div>
        </Link>

        <div className="navbar__right">
          <nav className="navbar__links" aria-label="Glavni meni">
            {LINKS.map(({ to, label, end, icon }) => (
              <Link
                key={to}
                href={to}
                className={`navbar__link${isActive(to, end) ? " navbar__link--active" : ""}`}
              >
                <span className="navbar__link-icon">{icon}</span>
                {label}
              </Link>
            ))}
          </nav>

          <span className="navbar__divider" />

          <div className="navbar__actions">
            <div className="navbar__socials">
              <IconButton
                as="a"
                href="https://www.instagram.com/ustvarjalnica_kepa/"
                label="Instagram"
                className="navbar__social"
              >
                <IconInstagram />
              </IconButton>
              <IconButton
                as="a"
                href="https://facebook.com"
                label="Facebook"
                className="navbar__social"
              >
                <IconFacebook />
              </IconButton>
            </div>

            <IconButton
              label={open ? "Zapri meni" : "Odpri meni"}
              className="navbar__toggle"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <IconClose /> : <IconMenu />}
            </IconButton>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <nav
        className={`navbar__mobile${open ? " navbar__mobile--open" : ""}`}
        aria-label="Meni za mobilne naprave"
      >
        {LINKS.map(({ to, label, end, icon }) => (
          <Link
            key={to}
            href={to}
            onClick={() => setOpen(false)}
            className={`navbar__mobile-link${isActive(to, end) ? " navbar__link--active" : ""}`}
          >
            <span className="navbar__link-icon">{icon}</span>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
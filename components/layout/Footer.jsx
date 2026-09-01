import Link from "next/link";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container footer__wrap">

        {/* BRAND HERO */}
        <div className="footer__brand">
          <h3 className="footer__logo">Ustvarjalnica KEPA</h3>
          <p className="footer__tagline">♥ Narejeno z ljubeznijo ♥</p>
        </div>

        {/* MAIN GRID */}
        <div className="footer__grid">

          {/* NAV */}
          <div className="footer__col">
            <h4 className="footer__heading">Povezave</h4>
            <ul className="footer__links">
              <li><a href="#faq">Pogosta vprašanja</a></li>
              <li><Link href="/shop">Trgovina</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer__col">
            <h4 className="footer__heading">Kontakt</h4>
            <p className="footer__contact">
              <a href="mailto:hello@kepa.si">ustvarjalnicakepa@outlook.com</a>
            </p>
          </div>

          {/* SOCIAL */}
          <div className="footer__col">
            <h4 className="footer__heading">Sledi mi na</h4>
            <div className="footer__socials">
              <a
                className="footer__social"
                href="https://www.facebook.com/profile.php?id=61576500803275&locale=sl_SI"
                target="_blank"
                rel="noreferrer"
              >
                <span className="footer__socialIcon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path
                      d="M22 12a10 10 0 1 0-11.56 9.87v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88
                      1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.62.77-1.62 1.56V12h2.76l-.44 2.88h-2.32v6.99A10 10 0 0 0 22 12z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                Facebook
              </a>
              <a
                className="footer__social"
                href="https://www.instagram.com/ustvarjalnica_kepa/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="footer__socialIcon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.92 4.92 0 0 1 1.772 1.153
                      1.154 1.154 0 0 1 1.153 1.772c.163.46.35 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07
                      4.85c-.054 1.17-.24 1.97-.403 2.43a4.92 4.92 0 0 1-1.153 1.772 4.92 4.92 0 0 1-1.772 1.153c-.46.163-1.26.35-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.92 4.92 0 0 1-1.772-1.153 4.92 4.92 0 0 1-1.153-1.772c-.163-.46-.35-1.26-.403-2.43C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43A4.92 4.92 0 0 1 3.79 2.948a4.92 4.92 0 0 1 1.772-1.153c.46-.163 1.26-.35 2.43-.403C9.416 2.175 9.796 2.163 12 2.163zm0 1.802c-3.163 0-3.52.012-4.773.07-1.045.048-1.615.222-1.992.369a3.1 3.1 0 0 0-1.154.75 3.1 3.1 0 0 0-.75 1.154c-.147.377-.32.947-.369 1.992-.058 1.253-.07 1.61-.07 4.773s.012 3.52.07 4.773c.048 1.045.222 1.615.369 1.992.181.467.424.865.75 1.154.29.326.687.569 1.154.75.377.147.947.32 1.992.369 1.253.058 1.61.07 4.773.07s3.52-.012 4.773-.07c1.045-.048 1.615-.222 1.992-.369a3.1 3.1 0 0 0 1.154-.75 3.1 3.1 0 0 0 .75-1.154c.147-.377.32-.947.369-1.992.058-1.253.07-1.61.07-4.773s-.012-3.52-.07-4.773c-.048-1.045-.222-1.615-.369-1.992a3.1 3.1 0 0 0-.75-1.154 3.1 3.1 0 0 0-1.154-.75c-.377-.147-.947-.32-1.992-.369-1.253-.058-1.61-.07-4.773-.07zm0 3.063a4.972 4.972 0 1 1 0 9.944 4.972 4.972 0 0 1 0-9.944zm0 1.802a3.17 3.17 0 1 0 0 6.34 3.17 3.17 0 0 0 0-6.34zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                Instagram
              </a>
            </div>
          </div>

        </div>

        {/* DECORATIVE DIVIDER */}
        <div className="footer__divider">
          <span className="footer__divider-leaf">✦</span>
        </div>

        {/* BOTTOM */}
        <div className="footer__bottom">
          <p className="footer__credit">
            Nekatere slike so bile dobljene iz{" "}
            <a href="https://www.freepik.com" target="_blank" rel="noreferrer">Freepik</a>.
          </p>
          <p className="footer__copy">© {new Date().getFullYear()} ustvarjalnica KEPA</p>
          <a className="footer__toTop" href="#top">Nazaj na vrh ↑</a>
        </div>

      </div>
      <img
        className="footer__watermark"
        src="/assets/icon/BeloTransparent.webp"
        alt=""
        aria-hidden="true"
      />
    </footer>
  );
}
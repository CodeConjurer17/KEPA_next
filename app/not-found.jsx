import Link from "next/link";
import { IconInfo } from "../components/layout/icons/Icons";
import "./styles/NotFound.css";

export default function NotFound() {
  return (
    <main
      className="not-found"
      style={{ backgroundImage: `url(/assets/green.webp)` }}
    >
      <div className="not-found__overlay">
        <div className="not-found__card">
          <div className="not-found__icon">
            <IconInfo />
          </div>

          <p className="not-found__code">404</p>

          <h1 className="not-found__title">Stran ni bila najdena</h1>

          <p className="not-found__text">
            Izdelek ali stran, ki jo iščeš, ne obstaja ali je bila premaknjena.
          </p>

          <div className="not-found__actions">
            <Link href="/" className="not-found__btn">
              Nazaj domov
            </Link>
            <Link href="/izdelki" className="not-found__link">
              Poglej izdelke
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
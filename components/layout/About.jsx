import Link from "next/link";
import "./styles/About.css";

export default function About() {
  return (
    <section
      id="about"
      className="about-full"
      style={{ backgroundImage: `url(/assets/ozadje_about.jpg)` }}
      aria-label="O meni"
    >
      <div className="about-full__overlay">
        <div className="container about-full__inner">
          <div className="about-full__spacer" />

          <div className="about-full__content">
            <h2 className="about-full__title">O meni</h2>

            <p className="about-full__text">
              Sem ustvarjalka KEPA — majhna delavnica, kjer vsak izdelek nastane
              ročno, z veliko potrpežljivosti in še več ljubezni.
            </p>

            <p className="about-full__text">
              Verjamem v počasno ustvarjanje, kakovostne materiale in izdelke,
              ki niso samo lepi, ampak tudi uporabni in trajni.
            </p>

            <div className="about-full__actions">
              <Link className="about-full__btn" href="/shop">
                Poglej izdelke
              </Link>
              <a className="about-full__link" href="#faq">
                Preberi FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
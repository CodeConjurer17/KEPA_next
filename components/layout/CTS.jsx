import "./styles/CTA.css";

export default function CTS() {
  return (
    <section
      className="cta"
      style={{ backgroundImage: `url(/assets/ozadje_dark.webp)` }}
      aria-label="Call to action"
    >
      <div className="cta__overlay">
        <div className="cta__content container">
          <h1 className="cta__title">Izdelki v naši ponudbi</h1>
          <p className="cta__subtitle">
            Velika ponudba najrazličnejših ročno izdelanih umetnin.
          </p>

        </div>
      </div>
    </section>
  );
}

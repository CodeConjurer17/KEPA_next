import Button from "../ui/Button";
import { IconArrowRight } from "./icons/Icons";
import "./styles/CTA.css";

export default function CTA() {
  return (
    <section
      className="cta"
      style={{ backgroundImage: `url(/assets/ozadje_dark.webp)` }}
      aria-label="Predstavitev"
    >
      <div className="cta__overlay">
        <div className="cta__content">
          <h1 className="cta__title">Navdih v vsakem izdelku.</h1>

          <p className="cta__subtitle">
            Odkrij unikatne izdelke, narejene ročno in z veliko ljubezni.
          </p>

          <Button to="/shop" variant="primary" icon={<IconArrowRight />}>
            Poglej ponudbo
          </Button>
        </div>
      </div>
    </section>
  );
}
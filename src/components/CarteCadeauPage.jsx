import Hero from "./CarteCadeau/Hero";
import Formules from "./CarteCadeau/Formules";
import MontantLibre from "./CarteCadeau/MontantLibre";
import Options       from "./CarteCadeau/Options";
import Steps         from "./CarteCadeau/Steps";
import Testimonials  from "./CarteCadeau/Testimonials";
import FAQ           from "./CarteCadeau/FAQ";
import CTA           from "./CarteCadeau/CTA";

export default function CarteCadeauPage() {
   return (
    <>
      <Hero />
      <Formules />
      <MontantLibre />
      <Options />
      <Steps />
      <Testimonials />
      <FAQ />
      <CTA />
      {/* ➜ on ajoutera les autres sections ensuite */}
    </>
  );
}

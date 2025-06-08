import React from "react";

const URL = "#formules"; // ou lien Fotostudio réel

export default function CTA() {
  return (
    <>
      {/* section visible desktop/tablette */}
      <section className="py-16 px-6 md:px-12 text-center bg-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Prêt·e à offrir un moment inoubliable ?
        </h2>
        <a
          href={URL}
          className="inline-block bg-dore-clair hover:bg-dore-fonce text-white
                     font-semibold py-4 px-10 rounded-lg shadow-lg transition"
        >
          Offrir une carte cadeau
        </a>
      </section>

      {/* bouton sticky mobile */}
      <a
        href={URL}
        className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50
                   bg-dore-fonce text-white px-6 py-3 rounded-full shadow-xl"
      >
        Offrir maintenant
      </a>
    </>
  );
}

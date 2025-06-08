import React from "react";

const steps = [
  "Choisissez la formule ou le montant",
  "Payez en ligne (Fotostudio sécurisé)",
  "Recevez la carte par e-mail ou courrier",
  "Le bénéficiaire réserve sa séance",
];

export default function Steps() {
  return (
    <section id="etapes" className="py-16 px-6 md:px-12 bg-fond-principal">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
        Comment ça marche ?
      </h2>

      <ol className="max-w-4xl mx-auto grid gap-6 md:grid-cols-4">
        {steps.map((s, i) => (
          <li key={i} className="flex flex-col items-center">
            <span className="w-12 h-12 rounded-full bg-dore-clair text-white flex items-center justify-center font-semibold mb-4">
              {i + 1}
            </span>
            <p className="text-center">{s}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

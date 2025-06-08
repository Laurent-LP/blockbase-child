import React, { useState } from "react";

const qas = [
  { q: "Validité de la carte ?",                       a: "12 mois à compter de l’achat." },
  { q: "Personnalisation possible ?",                 a: "Oui : message et design adaptés." },
  { q: "Déroulement de la séance ?",                  a: "À domicile ou extérieur, 30 km autour de Champier." },
  { q: "Photos supplémentaires ?",                    a: "Ajoutables après séance (packs dispo)." },
  { q: "Comment réserver ?",                          a: "Via le lien sécurisé Fotostudio joint à la carte." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="py-16 px-6 md:px-12 bg-fond-principal">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
        Questions fréquentes
      </h2>

      <div className="max-w-3xl mx-auto divide-y divide-taupe">
        {qas.map(({ q, a }, i) => (
          <div key={i} className="py-4">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between text-left font-medium"
            >
              {q} <span>{open === i ? "–" : "+"}</span>
            </button>
            {open === i && <p className="mt-2 text-sm">{a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

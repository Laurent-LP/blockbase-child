import React, { useState } from "react";

const opts = [
  { id: 1, label: "Déplacement à domicile (+40 € > 30 km)", prix: 40 },
  { id: 2, label: "Photo supplémentaire (+12 €)",            prix: 12 },
  { id: 3, label: "Pack 10 photos (+80 €)",                  prix: 80 },
  { id: 4, label: "Galerie prolongée 6 mois (+15 €)",        prix: 15 },
];

export default function Options() {
  const [checked, setChecked] = useState([]);

  const toggle = (id) =>
    setChecked((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]));

  const total = checked.reduce(
    (s, id) => s + opts.find((o) => o.id === id).prix,
    0
  );

  return (
    <section id="options" className="py-16 px-6 md:px-12">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
        Options complémentaires
      </h2>

      <ul className="max-w-xl mx-auto space-y-6">
        {opts.map(({ id, label, prix }) => (
          <li key={id} className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={checked.includes(id)}
              onChange={() => toggle(id)}
              className="accent-dore-clair mt-1"
            />
            <span>{label}</span>
          </li>
        ))}
      </ul>

      <p className="text-center mt-8 font-semibold">
        Total options : {total.toFixed(0)} €
      </p>
    </section>
  );
}

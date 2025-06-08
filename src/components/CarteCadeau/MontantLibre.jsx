import React, { useState } from "react";

export default function MontantLibre() {
  const [valeur, setValeur] = useState(150);

  return (
    <section
      id="montant-libre"
      className="py-16 px-6 md:px-12 bg-fond-principal text-brun-fonce"
      aria-labelledby="titre-montant-libre"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 id="titre-montant-libre" className="text-2xl md:text-4xl font-bold mb-6">
          Carte cadeau – montant libre
        </h2>

        <div className="flex flex-col items-center gap-4 mb-8">
          <input
            type="range"
            min={50}
            max={500}
            step={10}
            value={valeur}
            onChange={(e) => setValeur(Number(e.target.value))}
            className="w-full md:w-2/3 accent-dore-clair"
          />
          <span className="text-3xl font-semibold text-dore-fonce">
            {valeur} €
          </span>
        </div>

        <button
          className="bg-dore-clair hover:bg-dore-fonce text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition"
        >
          Offrir {valeur} €
        </button>

        <p className="mt-8 text-sm md:text-base italic max-w-lg mx-auto">
          💖 Créez une cagnotte photo pour un cadeau collectif (EVJF, anniversaire, etc.).
        </p>
      </div>
    </section>
  );
}

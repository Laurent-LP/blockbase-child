import React from "react";

const offres = [
  { titre: "Solo",    prix: "99 €",  desc: "30 min • 3 photos retouchées" },
  { titre: "Duo",     prix: "149 €", desc: "1 h • 5 photos retouchées"   },
  { titre: "Famille", prix: "199 €", desc: "1 h 30 • 10 photos retouchées" }
];

export default function Formules() {
  return (
    <section id="formules" className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold">Nos formules</h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {offres.map(({ titre, prix, desc }) => (
          <div
            key={titre}
            className="border rounded-lg p-6 hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">{titre}</h3>
            <p className="text-3xl text-dore-fonce font-bold mb-4">{prix}</p>
            <p className="mb-6">{desc}</p>
            <button className="bg-brun-doux hover:bg-brun-fonce text-white py-2 px-4 transtion">
              Choisir
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

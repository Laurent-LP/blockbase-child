import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-fond-principal text-brun-fonce py-16 px-6 md:px-12"
      aria-label="Offrez un shooting photo inoubliable"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Offrez un shooting photo inoubliable 📸
        </h1>

        <p className="text-lg md:text-xl mb-8">
          Choisissez la formule qui convient le mieux et recevez une e-carte
          cadeau instantanément.
        </p>

        <a
          href="#formules"
          className="inline-block bg-dore-fonce hover:bg-dore-clair text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
        >
          Voir les formules
        </a>
      </div>
    </section>
  );
}

import React from "react";

const avis = [
  { a: "Golden D.",  q: "Superbes photos de naissance !" },
  { a: "Claudine L.", q: "Cadeau EVJF au top, magnifiques souvenirs." },
  { a: "M. B.",      q: "Laurent met à l’aise, résultat parfait !" },
];

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-16 px-6 md:px-12 bg-rose-poudre">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
        Ils en parlent mieux que moi
      </h2>

      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-3">
        {avis.map(({ a, q }) => (
          <figure key={a} className="bg-white p-6 rounded-2xl shadow-sm">
            <blockquote className="italic mb-4">“{q}”</blockquote>
            <figcaption className="text-right font-semibold">{a}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

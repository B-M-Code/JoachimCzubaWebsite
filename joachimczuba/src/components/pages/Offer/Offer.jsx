const items = [
  {
    title: "Pakiet Podstawowy",
    desc: "Krótki opis pierwszej usługi lub produktu.",
  },
  {
    title: "Pakiet Standard",
    desc: "Krótki opis drugiej usługi lub produktu.",
  },
  {
    title: "Pakiet Premium",
    desc: "Krótki opis trzeciej usługi lub produktu.",
  },
];

export default function Offer() {
  return (
    <section className="page page-offer">
      <h1>Oferta</h1>
      <div className="offer-grid">
        {items.map((item) => (
          <div className="offer-card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

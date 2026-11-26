import "../styles/trustbar.css";

const ITEMS = [
  { id: "t1", title: "India-Based Exporter", text: "Sourcing and export from India" },
  { id: "t2", title: "Global Buyer Focus", text: "Built for importers worldwide" },
  { id: "t3", title: "Professional Communication", text: "Clear, simple product enquiries" },
  { id: "t4", title: "Quality-Focused", text: "Quality beyond borders" },
];

export default function TrustBar() {
  return (
    <div className="trustbar" role="list">
      {ITEMS.map((item) => (
        <div className="trustbar__item" role="listitem" key={item.id}>
          <span className="trustbar__dot" aria-hidden="true" />
          <span className="trustbar__title">{item.title}</span>
          <span className="trustbar__text">{item.text}</span>
        </div>
      ))}
    </div>
  );
}
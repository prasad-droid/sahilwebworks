import EnquiryForm from "./EnquiryForm";
import "../styles/enquiry.css";

export default function Enquiry() {
  return (
    <section id="enquiry" className="enquiry section-pad">
      <div className="container enquiry__grid">
        <div className="enquiry__intro reveal">
          <p className="eyebrow">Enquiry</p>
          <h2 className="section-title">Tell Us What You're Looking For</h2>
          <p className="section-sub">
            Share your requirement and our team can discuss suitable sourcing
            and export possibilities.
          </p>
        </div>
        <div className="enquiry__form-wrap reveal">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}

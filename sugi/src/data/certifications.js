// Certification / registration agency logos supplied in Homepage.docx.
// Additional logos can be dropped into src/assets/certifications/ and added
// to this array — the homepage slider and the Certifications page both
// read from it.
//
// `file` points at the downloadable document in public/certificates/.
// Placeholder PDFs are committed there for now; replace each file (keeping
// the same name) with the official certificate when it is available.

const ASSETS = import.meta.glob("../assets/certifications/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
  import: "default",
});

function asset(file) {
  const key = `../assets/certifications/${file}`;
  return ASSETS[key];
}

export const CERTIFICATIONS = [
  {
    name: "APEDA",
    description:
      "Agricultural & Processed Food Products Export Development Authority, Ministry of Commerce & Industry, Government of India",
    image: asset("apeda.png"),
    file: "certificates/apeda.pdf",
    downloadName: "APEDA Certificate.pdf",
  },
  {
    name: "Spices Board India",
    description:
      "Spices Board India, Ministry of Commerce & Industry, Government of India",
    image: asset("spices-board-india.jpg"),
    file: "certificates/spices-board-india.pdf",
    downloadName: "Spices Board India Certificate.pdf",
  },
  {
    name: "FSSAI",
    description: "Food Safety and Standards Authority of India",
    image: asset("fssai.png"),
    file: "certificates/fssai.pdf",
    downloadName: "FSSAI Certificate.pdf",
  },
].filter((c) => c.image);

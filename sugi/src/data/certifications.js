// Certification / registration agency logos supplied in Homepage.docx.
// Additional logos can be dropped into src/assets/certifications/ and added
// to this array — the homepage slider and the Certifications page both
// read from it.

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
  },
  {
    name: "Spices Board India",
    description:
      "Spices Board India, Ministry of Commerce & Industry, Government of India",
    image: asset("spices-board-india.jpg"),
  },
  {
    name: "FSSAI",
    description: "Food Safety and Standards Authority of India",
    image: asset("fssai.png"),
  },
].filter((c) => c.image);

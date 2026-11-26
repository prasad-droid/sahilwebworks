export default function GenericModal({ isModalOpen, closeModal, modalTitle, modalContent }) {
  return (
    <div className={`modal ${isModalOpen ? 'active' : ''}`} onClick={(e) => e.target.classList.contains('modal') && closeModal()}>
      <div className="modal-content">
        <button className="modal-close" onClick={closeModal} aria-label="Close modal">{"\u00D7"}</button>
        <div id="modal-body-content">
          {modalTitle && <h3 style={{ fontFamily: 'Outfit', fontSize: '1.6rem', color: 'var(--primary-blue)', marginBottom: '20px', lineHeight: 1.3 }}>{modalTitle}</h3>}
          {modalContent}
        </div>
      </div>
    </div>
  );
}

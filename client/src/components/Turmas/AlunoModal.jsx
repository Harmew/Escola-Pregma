import React from "react";

// CSS
import styles from "./AlunoModal.module.css";

// Components
import AlunoEditModal from "./AlunoModals/AlunoEditModal";
import AlunoCreateModal from "./AlunoModals/AlunoCreateModal";

const AlunoModal = ({ aluno, handleModal }) => {
  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) handleModal(event);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h3>Adionar ou Editar aluno</h3>
          <div onClick={handleModal} className={styles.btn} tabIndex="1"></div>
        </div>
        {aluno != 0 ? (
          <AlunoEditModal aluno={aluno} handleModal={handleModal} />
        ) : (
          <AlunoCreateModal handleModal={handleModal} />
        )}
      </div>
    </div>
  );
};

export default AlunoModal;

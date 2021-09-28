import React from 'react';
import styles from './SuccessModal.module.css';

const SuccessModal = ({ message, onClose }) => {
  return (
    <React.Fragment>
      <button className={`${styles.backdrop}`} onClick={onClose}></button>
      <div className={`${styles.container}`}>
        <div className={`${styles.modal}`}>
          <header className={`${styles.header}`}>
            <h2 className={`${styles.heading}`}>{message}</h2>
          </header>
          <footer className={`${styles.footer}`}>
            <button className={`${styles.btn}`} onClick={onClose}>
              Thank you.
            </button>
          </footer>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SuccessModal;

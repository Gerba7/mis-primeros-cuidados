import Modal from '@mui/material/Modal';
import { useState } from 'react';
import styles from './modal.module.css';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';



export default function BasicModal({ image, description }) {

  const [open, setOpen] = useState(false);


  const handleOpen = (e) => {
    e.preventDefault()
    setOpen(true)
  };

  const handleClose = (e) => {
    e.preventDefault()
    setOpen(false)
  };


  return (
    <div>
      <div className={styles.button} onClick={handleOpen}>Ver mas</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
            border: 'none',
            outline: 'none'
        }}
      >
        <div className={styles.modal}>
            <div className={styles.iconContainer}>
                <CloseIcon fontSize='inherit' color='inherit' onClick={() => setOpen(false)} />
            </div>
            <div className={styles.background}>
                <Image className={styles.image} src={image} alt='image' />
            </div>
            <div className={styles.description}>
                {description}
            </div>
        </div>
      </Modal>
    </div>
  );
}

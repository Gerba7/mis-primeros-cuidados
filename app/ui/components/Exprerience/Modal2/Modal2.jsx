import Modal from '@mui/material/Modal';
import { useState } from 'react';
import styles from './modal2.module.css';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';



export default function BasicModal2({ name, description, flag }) {

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
            <Image className={styles.flag} src={flag} alt='Experiencia' />
            <div className={styles.info}>
                <div className={styles.top}>
                    <p className={styles.title}>
                        {name}
                    </p>
                </div>
                <div className={styles.center}>
                    <p className={styles.description}>
                        {description}
                    </p>
                </div>
                <div className={styles.bottom}>
                    <span className={styles.stars}><StarIcon color='inherit' fontSize='inherit'/></span>
                    <span className={styles.stars}><StarIcon color='inherit' fontSize='inherit'/></span>
                    <span className={styles.stars}><StarIcon color='inherit' fontSize='inherit'/></span>
                    <span className={styles.stars}><StarIcon color='inherit' fontSize='inherit'/></span>
                    <span className={styles.stars}><StarIcon color='inherit' fontSize='inherit'/></span>
                </div>
            </div>
          </div>
      </Modal>
    </div>
  );
}

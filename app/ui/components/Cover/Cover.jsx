import styles from './cover.module.css';
import Image from 'next/image';
import Cover_Primeros from '../../../../public/images/Primeros_Cuidados_Cover.jpg';
import Cover_Primeros_Mobile from '../../../../public/images/Primeros_Cuidados_Cover_Mobile2.jpg';


const Cover = () => {
  return (
    <div className={styles.container}>
      <div className={styles.back}>
          <Image className={styles.img} priority src={Cover_Primeros} alt='mis-primeros-cuidados' />
      </div>
      <div className={styles.backMobile}>
          <Image className={styles.img} priority src={Cover_Primeros_Mobile} alt='mis-primeros-cuidados' />
      </div>
    </div>
  )
}

export default Cover

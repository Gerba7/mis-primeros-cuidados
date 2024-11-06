import styles from './cover.module.css';
import Image from 'next/image';
import Cover_Primeros from '../../../../public/images/Primeros_Cuidados_Cover.jpg';


const Cover = () => {
  return (
    <div className={styles.container}>
      <div className={styles.back}>
          <Image className={styles.img} src={Cover_Primeros} alt='mis-primeros-cuidados' />
      </div>
    </div>
  )
}

export default Cover

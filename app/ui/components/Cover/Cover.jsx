import styles from './cover.module.css';
import Image from 'next/image';
import Link from 'next/link';


const Cover = () => {
  return (
    <div className={styles.container}>
      <div className={styles.back} />
    </div>
  )
}

export default Cover

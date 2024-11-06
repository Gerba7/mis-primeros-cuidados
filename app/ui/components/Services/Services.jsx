'use client'

import styles from './services.module.css';
import { titan } from '@/app/page';
import Slider2 from './Slider2/Slider2';



const Services = () => {


  return (
    <div className={styles.container}>
        <div className={styles.scrollOffset} id='servicios'></div>
        <div className={styles.wrapper}>
            <h1 className={`${titan.className} ${styles.title} `}>
                Servicios
            </h1>
            <>
                {/* <Slider /> */}
                <Slider2 />
            </>
        </div>
    </div>
  )
}

export default Services

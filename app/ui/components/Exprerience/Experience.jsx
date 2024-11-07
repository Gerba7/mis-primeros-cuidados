

import { titan } from '@/app/layout';
import styles from './experience.module.css';
import SliderEx from './SliderEx/SliderEx';



const Experience = () => {


  return (
    <div className={styles.container}>
        <div className={styles.scrollOffset} id='experiencia'></div>
        <div className={styles.wrapper}>
            <h1 className={`${titan.className} ${styles.title} `}>
                Experiencia
            </h1>
            <>
                <SliderEx />
            </>
        </div>
    </div>
  )
}

export default Experience

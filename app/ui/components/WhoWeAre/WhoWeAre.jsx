'use client'


import styles from './whoWeAre.module.css';
import { titan } from '@/app/page';
import Image from 'next/image';
import Gabriela_Rojas from '../../../../public/images/whoWeAre.png';



const WhoWeAre = () => {


  return (
    <div className={styles.container}>
        <div className={styles.scrollOffset} id='quienes-somos'></div>
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <Image className={styles.img} src={Gabriela_Rojas} alt='Gabriela Rojas' /> 
                </div>
                <div className={styles.right}>
                    <p className={styles.text}>
                      <b className={`${titan.className}`}>Gabriela Rojas</b>, CEO & Founder de <b className={`${titan.className}`}>«Mis Primeros Cuidados»</b> una empresa comprometida con brindar atención de calidad a los 
                      más pequeños, Gabriela se destaca por su sensibilidad, profesionalismo y atención al detalle
                    </p>
                    <p className={styles.text}>
                        <b className={`${titan.className}`}>«Mis Primeros Cuidados»</b> nace a partir de la necesidad de complementar el trabajo de las maternidades en sus primeros pasos.
                        Brindamos contención y cuidados tanto físicos como emocionales.
                        Nuestro equipo de profesionales niñeras/nurses están en constante capacitación para poder abordar de forma integral el 
                        cuidado de las infancias desde los primeros momentos de vida.
                        Nuestra misión nace a partir de su creadora Ana Gabriela Rojas, fundadora de «Mis Primeros Cuidados», quien propone estrategias de 
                        trabajo para que las familias encuentren en nuestros servicios, el apoyo constante para la crianza de sus hijos, acompañados 
                        de cálidos profesionales.
                        Porque lo más importante para nosotros es ser parte del maravilloso vínculo entre madres/padres e hijos.
                    </p>
                    
                </div>
            </div>
            <div className={styles.bottom}>
              <h3 className={`${titan.className} ${styles.subtitle}`}>Nuestra misión</h3>
              <p className={styles.text}>
              <b className={`${titan.className}`}>«Mis Primeros Cuidados»</b> está formada por un equipo de profesionales especializadas en primera infancia. Acompañando a maternar y 
                  paternar desde el respeto, poniendo como prioridad el cuidado y acompañamiento a cada una de las familias.
                  Plasmando los conocimientos de nuestro staff para transitar el camino de quienes nos eligen consciente y amorosamente.
                  Acompañamos y respetamos el ritmo de cada familia durante los primeros años de vida de sus hijos. Sentimos y empatizamos 
                  cada una de sus necesidades donde el objetivo principal es desarrollar un vínculo de amor y respeto por la individualidad 
                  y necesidad de cada uno.
                  Respetamos estilos de crianza de cada familia, comprendiendo que cada niño tiene sus tiempos, su dinámica y cultura.
                  Nuestra misión es acompañar a cada mamá y papá haciéndoles sentir que están establecidas sus pautas y respetadas por sobre todo.
              </p>
            </div>
        </div>
    </div>
  )
}

export default WhoWeAre

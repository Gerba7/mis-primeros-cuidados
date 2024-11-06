'use client'

import useAnimateOnScroll from '@/app/hooks/useAnimateOnScroll';
import styles from './contact.module.css';
import { titan } from '@/app/page';
import Image from 'next/image';
import Items from '../../../../public/images/contactCoverItems.png';
import Form from './Form/Form';


const Contact = () => {

    const titleAnimation = useAnimateOnScroll();


  return (
    <div className={styles.container}>
        <div className={styles.scrollOffset} id='contacto'></div>
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.left}>
                  <div className={styles.leftContent}>
                    <h1 className={`${titan.className} ${styles.title} ${titleAnimation ? styles.visible : ''}`} ref={titleAnimation.ref}>
                        Contacto
                    </h1>
                    <Form />
                  </div>
                </div>
                <div className={styles.right}>
                    <Image className={styles.img} src={Items} alt='items' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact

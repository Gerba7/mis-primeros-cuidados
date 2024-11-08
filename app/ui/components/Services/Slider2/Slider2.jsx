'use client'

import styles from './slider2.module.css';
import { useEffect, useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from 'next/link';
import Image from 'next/image';
import Servicio1 from '../../../../../public/images/servicio1.jpg';
import Servicio2 from '../../../../../public/images/servicio2.jpg';
import Servicio3 from '../../../../../public/images/servicio3.jpg';
import Servicio4 from '../../../../../public/images/servicio4.jpg';
import Servicio5 from '../../../../../public/images/servicio5.jpg';
import Servicio6 from '../../../../../public/images/servicio6.jpg';

const Slider2 = () => {

    const data = [
        {
             _id: 0, 
            name: 'Personal idóneo, dónde se trata una crianza libre de violencia, a partir de la interacción con el niños desde el respeto, promoviendo no solo aprendizajes necesarios sino el bienestar psicológico de los niños.', 
            src: Servicio1 
        },
        { 
            _id: 1, 
            name: 'Nuestras puericultoras se enfocan en el desarrollo integral del recién nacido, apoyando la crianza respetando las elecciones maternas y fomentando una lactancia exitosa.', 
            src: Servicio2 
        },
        { 
            _id: 2, 
            name: 'Expertos en cuidado del recién nacido brindan apoyo integral a las familias con asesoramiento y habilidades especializadas.', 
            src: Servicio3 
            
        },
        { 
            _id: 3, 
            name: 'Disponemos de niñeras part-time para horas diarias y full-time para jornadas completas, ambas altamente capacitadas para brindar cuidado de calidad.', 
            src: Servicio4 
            
        },
        { 
            _id: 4, 
            name: 'Servicio nocturno especializado para bebés, adaptado a las necesidades y preferencias familiares.', 
            src: Servicio5 
            
        },
        { 
            _id: 5, 
            name: 'Expertos en sueño trabajan con cada niño para lograr una disciplina efectiva en su rutina de descanso.', 
            src: Servicio6 
            
        }
    ];

    const [slideIndex, setSlideIndex] = useState(0);
    const length = data.length * 2 - 3;

    
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : length - 1);
        } else {
            setSlideIndex(slideIndex < length - 1 ? slideIndex + 1 : 0);
        }
    };

    
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex < length - 1 ? prevIndex + 1 : 0));
        }, 3000);
        return () => clearInterval(interval);
    }, [length]);



    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={`${styles.arrow} ${styles.left}`} onClick={() => handleClick("left")}>
                    <KeyboardArrowLeftIcon />
                </div>
                <div className={styles.row}>
                    {data.concat(data).map((ac, index) => (
                        <div key={index} className={styles.card} style={{ transform: `translate(-${slideIndex * 100}%)` }}>
                            <Link href={`/`} className={styles.content}>
                                <div className={styles.background}>
                                    <Image className={styles.backgroundImg} src={ac.src} alt='hotelImage' />
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.top}>
                                        <p className={styles.title}>{ac?.name}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className={`${styles.arrow} ${styles.right}`} onClick={() => handleClick("right")}>
                    <KeyboardArrowRightIcon />
                </div>
            </div>
        </div>
    );
};

export default Slider2;

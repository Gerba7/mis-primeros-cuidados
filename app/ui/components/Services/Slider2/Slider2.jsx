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
import Modal from '../Modal/Modal';

const Slider2 = () => {

    const data = [
        {
             _id: 0, 
            name: 'Enfoque en crianza respetada y sin violencia, priorizando el bienestar psicológico de los niños mediante acciones basadas en el respeto.', 
            src: Servicio1,
            description: 'Personal idóneo, dónde se trata una crianza libre de violencia, a partir de la interacción con el niños desde el respeto, promoviendo no solo aprendizajes necesarios sino el bienestar psicológico de los niños.'
        },
        { 
            _id: 1, 
            name: 'Nuestras puericultoras se enfocan en el desarrollo integral del recién nacido, apoyando la crianza respetando las elecciones maternas y fomentando una lactancia exitosa.', 
            src: Servicio2 ,
            description: 'Las puericultoras son profesionales especializadas en proporcionar cuidados físicos, emocionales y sociales a los recién nacidos y a sus madres. Brindan apoyo a las madres en la elección de la crianza de sus hijos, desempeñando un papel crucial en la promoción de la lactancia materna exitosa, ofreciendo asesoramiento y educación sobre las técnicas de lactancia adecuadas, la alimentación del bebé y la resolución de problemas comunes relacionados con la lactancia.'
        },
        { 
            _id: 2, 
            name: 'Expertos en cuidado del recién nacido brindan apoyo integral a las familias con asesoramiento y habilidades especializadas.', 
            src: Servicio3 ,
            description: 'Las nurses son pilares fundamentales en el cuidado del recién nacido y el apoyo a las familias durante los primeros días de vida del bebé. Su dedicación, experiencia y conocimientos especializados en el área del cuidado infantil contribuyen significativamente a la salud y el bienestar tanto del bebé como de sus padres, aportando asesoramiento y orientación a las familias en una variedad de temas relacionados con la crianza y el desarrollo infantil.'
        },
        { 
            _id: 3, 
            name: 'Disponemos de niñeras part-time para horas diarias y full-time para jornadas completas, ambas altamente capacitadas para brindar cuidado de calidad.', 
            src: Servicio4 ,
            description: 'Ofrecemos un equipo versátil de niñeras que se ajustan a tu rutina. Desde las niñeras Part-Time, hasta las niñeras Full-Time. Todas nuestras niñeras están altamente capacitadas y son sometidas a un estricto seguimiento para garantizar la mejor calidad de cuidado para tus hijos. Las niñeras son seleccionadas no solo por su experiencia y habilidades, sino también por su capacidad para adaptarse a las necesidades específicas de cada familia y niño.'
        },
        { 
            _id: 4, 
            name: 'Servicio nocturno especializado para bebés, adaptado a las necesidades y preferencias familiares.', 
            src: Servicio5 ,
            description: 'Las guardias nocturnas están diseñadas específicamente para aquellas familias que desean delegar el cuidado de su bebé a una profesional capacitada durante la noche. Este servicio brinda tranquilidad a los padres, permitiéndoles descansar adecuadamente mientras su bebé recibe atención experta y continua durante las horas de sueño, ayudando a establecer rutinas saludables de sueño para el bebé al proporcionar un ambiente seguro y calmado durante la noche.'
        },
        { 
            _id: 5, 
            name: 'Expertos en sueño trabajan con cada niño para lograr una disciplina efectiva en su rutina de descanso.', 
            src: Servicio6 ,
            description: 'Profesionales expertos en la conducta del sueño y el desarrollo infantil. Utilizan una variedad de enfoques y técnicas para ayudar a establecer rutinas de sueño saludables y efectivas, logrando que el niño pueda conciliar el sueño fácilmente, dormir durante períodos prolongados y despertarse sintiéndose descansado y rejuvenecido.'
        }
    ];

    const [slideIndex, setSlideIndex] = useState(0);
    const [open, setOpen] = useState(false);

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
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={`${styles.arrow} ${styles.left}`} onClick={() => handleClick("left")}>
                        <KeyboardArrowLeftIcon />
                    </div>
                    <div className={styles.row}>
                        {data.concat(data).map((ac, index) => (
                            <div key={index} className={styles.card} style={{ transform: `translate(-${slideIndex * 100}%)` }}>
                                <div className={styles.content}>
                                    <div className={styles.background}>
                                        <Image className={styles.backgroundImg} src={ac.src} alt='hotelImage' />
                                    </div>
                                    <div className={styles.info}>
                                        <div className={styles.top}>
                                            <p className={styles.title}>{ac?.name}</p>
                                        </div>
                                        <Modal image={ac.src} description={ac.description} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={`${styles.arrow} ${styles.right}`} onClick={() => handleClick("right")}>
                        <KeyboardArrowRightIcon />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider2;

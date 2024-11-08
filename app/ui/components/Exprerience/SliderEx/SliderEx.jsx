'use client'

import styles from './sliderEx.module.css';
import { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import StarIcon from '@mui/icons-material/Star';
import Wave from '../../../../../public/images/waveUp.png';
import Wave2 from '../../../../../public/images/waveDown.png';
import Image from 'next/image';
import Rus from '../../../../../public/images/rus.png';
import Arg from '../../../../../public/images/arg.png';
import Ind from '../../../../../public/images/ind.png';
import Ned from '../../../../../public/images/ned.png';
import Pol from '../../../../../public/images/pol.png';


const SliderEx = () => {

    const data = [
        {
             _id: 0, 
            name: 'Margarita Giardeli', 
            country: Arg,
            description: '«Quiera dar mi testimonio de la labor amorosa de Ana Gabriela Rojas. La conocí hace más de 10 años. Siendo Pediatra y ella acompañando a mis pacientes .Los cuales eran cuidados por ella ya que los padres trabajaban. Pocas veces visto en mi profesión la dedicación amorosa a esos bebés y niños para ser revisados por mi. Estando al tanto de la salud de ellos. Muy trabajadora empatica solidaria y siempre bien predispuesta a solucionar los problemas. En estos 40 años de profesión Pediátrica el poder observar a pacientes padres y cuidadores siempre me hizo pensar que Ana tendría que estar siempre velando por el cuidado de ellos. Ejemplo a tener en cuenta por la pasión y el Amor que posee. Pocas personas he conocido como ella, con tanta dedicación. Altamente recomendable.»'
        },
        { 
            _id: 1, 
            name: 'Julia Yukalacheva', 
            country: Rus,
            description: '«¡el trabajo se hizo de maravilla! Estoy muy, muy feliz. Gabriela eres genial! Definitivamente te lo advertiré, te aprecio mucho como persona y profesional.»'
        },
        { 
            _id: 2, 
            name: 'Anastasia Heng', 
            country: Pol,
            description: '«Sabes que me encanta que la cuides, eres muy conocedora y paciente, no solo la cuidaste, también me cuidaste a mí para que yo pueda recuperarme y tener un viaje de lactancia exitoso también. Durante el tiempo que trabajaste para mí, fui una nueva madre llena de preocupaciones pero me diste la seguridad de que todo va a estar genial.»'
        },
        { 
            _id: 3, 
            name: 'Ekaterina Vysochina', 
            country: Rus,
            description: '«Muchas gracias por el trabajo, se hizo con rapidez y precisión. ¡desde la primera vez nos encontraste una niñera que cumpliera con nuestros requisitos! Expresamos nuestras demandas y usted nos presento a Fio. ¡Es una niñera maravillosa, honesta y responsable, con Quine nuestro bebe esta feliz y nosotros estamos tranquilos!.»'
        },
        { 
            _id: 4, 
            name: 'Polina Cherpovitskaya', 
            country: Rus,
            description: '«¡Gabi es una niñera maravillosa! nos ayudó con la recién nacida Sofía desde 1 mes de vida. Es un profesional en su campo, tiene experiencia médica y conoce bien cualquier tema relacionado con la salud y el desarrollo del bebé. Responsable, puntual, agradable para hablar.»'
        },
        { 
            _id: 5, 
            name: 'Marcella Richard', 
            country: Ned,
            description: '«Puedo recomendar ampliamente los servicios de Gaby. Ella trabajó para nosotros durante nuestro tiempo en Argentina como expatriados y cuidó a nuestro bebé y a nuestra niña pequeña con mucho amor. Mi esposo y yo todavía estábamos aprendiendo el idioma y Gaby fue muy paciente y servicial con nosotros y también ayudó a nuestra pequeña a aprender nuevas palabras. Venía a nuestra casa varias veces por semana y siempre era muy puntual. Llevaba a los niños al patio de recreo, jugaba, los ayudaba con las comidas y la rutina nocturna para acostarlos. Nuestras hijas amaban a Gaby y todavía hablan de ella con cariño ahora que estamos de regreso en nuestro país de origen. Gaby fue crucial para nuestra familia durante algunos meses agitados mientras organizábamos nuestra mudanza fuera de Argentina y estamos muy agradecidos por todo lo que hizo por nosotros.»'
        },
        { 
            _id: 6, 
            name: 'Anabel Serdiuk', 
            country: Arg,
            description: '«Es muy gratificante referirme a su persona (Gabriela rojas) ya que significó un pilar fundamental en el desarrollo de las etapas fúndanles de la vida de mis hijos y tambien fue el principal apoyo para mi maternidad. Ya que con su profesionalismo y calidad humana nos acompañó durante ese tiempo demostrando habilidades propias del cuidado e higiene de mis niños, pero tambien motivando y educando en valores. Responsabilidad, compromiso, puntualidad, disponibilidad, confianza absoluta, sensibilidad son algunos de los valores con los que se destaca Gabriela. Tambien tomaba sus cursos de actualización en la cruz roja argentina y nos acompaño en varias oportunidades viajando al exterior.»'
        },
        { 
            _id: 7, 
            name: 'Rashmi Mittal', 
            country: Ind,
            description: '«Gabi nos cuidó a mí y a mi bebé recién nacido por la noche. Ella me ayudó con la lactancia, la extracción de leche, las visitas al médico y también todo lo que necesitaba comprar para el bebé. También compartió excelentes recomendaciones para niñeras. gracias Gabi, no habría podido afrontar mis primeros meses como madre primeriza sin tu ayudal.»'
        }
    ];

    const [slideIndex, setSlideIndex] = useState(0);
    const length = data.length - 2;

    
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : length - 1);
        } else {
            setSlideIndex(slideIndex < length - 1 ? slideIndex + 1 : 0);
        }
    };



    return (
        <div className={styles.container}>
            <div className={styles.waveUp}>
                <Image className={styles.img} src={Wave} alt='wave decoration' />
            </div>
            <div className={`${styles.waveUp} ${styles.waveUp2}`}>
                <Image className={styles.img} src={Wave} alt='wave decoration' />
            </div>
            <div className={`${styles.waveUp} ${styles.waveUp3}`}>
                <Image className={styles.img} src={Wave} alt='wave decoration' />
            </div>
            <div className={styles.waveDown}>
                <Image className={styles.img} src={Wave2} alt='wave decoration' />
            </div>
            <div className={`${styles.waveDown} ${styles.waveDown2}`}>
                <Image className={styles.img} src={Wave2} alt='wave decoration' />
            </div>
            <div className={`${styles.waveDown} ${styles.waveDown3}`}>
                <Image className={styles.img} src={Wave2} alt='wave decoration' />
            </div>
            <div className={styles.wrapper}>
                {slideIndex > 0 ? 
                    (
                        <div className={`${styles.arrow} ${styles.left}`} onClick={() => handleClick("left")}>
                            <KeyboardArrowLeftIcon />
                        </div>
                    )
                    :
                    (
                        <div className={`${styles.arrow} ${styles.left} ${styles.opacity}`}>
                            <KeyboardArrowLeftIcon />
                        </div>
                    )
                }
                <div className={styles.row}>
                    {data.map((ac, index) => {
                        
                        const diff = Math.abs(slideIndex - index);
                        let scaleClass = '';
                        if (diff === 0) {
                            scaleClass = `${styles.content2} ${styles.margin1}`; 
                        } else if (diff === 1) {
                            scaleClass = styles.content1;
                        } else if (diff === 2) {
                            scaleClass = `${styles.content2} ${styles.margin2}`;
                        } 

                        return(
                            <div key={ac._id} className={styles.card} style={{ transform: `translate(-${slideIndex * 100}%)` }}>
                                <div className={`${styles.content} ${scaleClass}`}>
                                    <Image className={styles.flag} src={ac?.country} alt='Experiencia' />
                                    <div className={styles.info}>
                                        <div className={styles.top}>
                                            <p className={styles.title}>
                                                {ac?.name}
                                            </p>
                                        </div>
                                        <div className={styles.center}>
                                            <p className={styles.description}>
                                                {ac?.description}
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
                            </div>
                        )
                    })}
                </div>
                {slideIndex < length - 1 ? 
                    (
                        <div className={`${styles.arrow} ${styles.right}`} onClick={() => handleClick("right")}>
                            <KeyboardArrowRightIcon />
                        </div>
                    )
                    :
                    (
                        <div className={`${styles.arrow} ${styles.right} ${styles.opacity}`}>
                            <KeyboardArrowRightIcon />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default SliderEx;

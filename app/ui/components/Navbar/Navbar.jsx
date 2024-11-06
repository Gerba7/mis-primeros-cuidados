'use client';

import { useEffect, useState, useCallback } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import { usePathname } from 'next/navigation';
import Primeros_Cuidados_Logo from '../../../../public/images/Primeros_Cuidados_Logo.png';

const Navbar = () => {
  const pathname = usePathname();
  const [navHeight, setNavHeight] = useState(pathname !== '/'); 
  const [displayMenu, setDisplayMenu] = useState(true);

  const handleScroll = useCallback(() => {
    if (pathname === '/') {
      setNavHeight(window.scrollY >= 80);
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname !== '/') {
      setNavHeight(true); 
    } else {
      setNavHeight(window.scrollY >= 80);
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, handleScroll]);

  useEffect(() => {
    setDisplayMenu(true);
  }, [pathname]);

  const toggleMenu = (e) => {
    e.preventDefault();
    setDisplayMenu(!displayMenu);
  };

  return (
    <div className={`${styles.container} ${navHeight ? styles.containerHeight : ''}`}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.burger} onClick={toggleMenu}>
            <div className={styles.menuItem} style={{ color: navHeight && '#788586' }}>
              {displayMenu ? (
                <>
                  {/* <MenuIcon color='inherit' style={{ fontSize: 'inherit' }} /> */}
                  <div className={styles.menuIcon}>
                    <hr className={styles.hr} style={{ backgroundColor: '#d1bca2' }} />
                    <hr className={styles.hr} style={{ backgroundColor: '#9f7920' }} />
                    <hr className={styles.hr} style={{ backgroundColor: '#748b71' }} />
                  </div>
                </>
              ) : (
                <CloseIcon color='inherit' style={{ fontSize: 'inherit', zIndex: 20, color: '#d1bca2' }} />
              )}
            </div>
          </div>
          <Link className={styles.logoLink} href='/'>
            <h1 className={styles.title}>Jochy</h1>
            <Image
              className={`${styles.logoNavbar} ${navHeight ? styles.visible : ''}`}
              src={navHeight ? Primeros_Cuidados_Logo : Primeros_Cuidados_Logo}
              alt='JOCHY_LOGO'
              width={'auto'}
              height={navHeight ? 45 : 58}
              priority
            />
          </Link>
        </div>
        <div className={`${styles.right} ${displayMenu ? styles.rightDisplay : ''}`}>
          <div className={`${displayMenu ? '' : styles.rightLinks}`}>
            <Link href='#quienes-somos' className={`${styles.link} ${navHeight ? styles.linkColor : ''}`}>QUIÉNES SOMOS</Link>
            <Link href='#servicios' className={`${styles.link} ${navHeight ? styles.linkColor : ''}`}>SERVICIOS</Link>
            <Link href='#experiencia' className={`${styles.link} ${navHeight ? styles.linkColor : ''}`}>EXPERIENCIA</Link>
            <Link href='#contacto' className={`${styles.link}  ${navHeight ? styles.linkColor : ''}`}>CONTACTO</Link>
          </div>
          <div className={`${styles.linkButtonContainer}`}>
            <Link href='#postulate' className={`${styles.link} ${styles.linkButton} ${navHeight ? styles.linkColor : ''}`}>POSTULATE</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
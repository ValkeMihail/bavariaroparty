import React from 'react'
import { useRouter } from 'next/router'
import styles from './nav.module.css'
import Image from 'next/image';
import bavariaropartyLogo from '../../../public/bavariaroparty.png';
const Navigation = () => {
  
  const router = useRouter(); 


  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li
          className={`${styles.li} hoverable`}
          onClick={() => router.push('/')}
        >
          <Image
            width={40}
            height={40}
            alt='BavariaRoParty Logo'
            src={bavariaropartyLogo}
          />
        </li>
        <li
          onClick={() => router.push('/#evenimente')}
          className={`${styles.li} hoverable`}
        >
          Evenimente
        </li>
        <li
          onClick={() => router.push('/#about')}
          className={`${styles.li} hoverable`}
        >
          Despre
        </li>
        <li
          onClick={() => router.push('/#contact')}
          className={`${styles.li} hoverable`}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

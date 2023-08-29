import React from 'react'
import Image from 'next/image'
import styles from './footer.module.css'
import aboutImage from '@/assets/aboutImageHero.png'
import { useRouter } from 'next/router'

export const About = () => {

  const router = useRouter()

  return (
    <div id='about' className={styles.container}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutDescription}>
          <h1>
            BavariaRoParty: Creatorii de Experiențe Culturale Românești în Germania
          </h1><br /><br />            
          <p>
            BavariaRoParty - suntem cei care pun în scenă România în inima Germaniei. Noi, BavariaroParty, suntem artizanii evenimentelor ce aduc bucuria și bogăția culturii românești în lumea germană. Cu o abordare meticuloasă, creăm experiențe autentice, de la serate muzicale captivante la delicii culinare tradiționale. BavariaroParty este sinonim cu pasiunea noastră pentru a împărtăși cultura noastră și pentru a face fiecare moment special și memorabil.
          </p>
          <div className={styles.buttonsWrap}>
            <button 
              onClick={() => router.push('/#contact')}
              className={`${styles.actionButton} ${styles.contactButton}`}>Contactează-ne</button>
            <button 
              onClick={() => router.push('/#evenimente')}
              className={`${styles.actionButton} ${styles.eventsButton}`}>Evenimente</button>
          </div>
        </div>
        <div className={styles.aboutImage}>
          <Image
            width={860}
            height={600}
            alt="About Image"
            src={aboutImage}
          />
        </div>
      </div>
    </div>
  )
}

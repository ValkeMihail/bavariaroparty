import Image from 'next/image'
import styles from './footer.module.css'
import facebook from '@/assets/facebook.svg'
import instagram from '@/assets/instagram.svg'
import { ValidationError, useForm } from '@formspree/react';
import telegram from '@/assets/telegram.svg'
import tiktok from '@/assets/tiktok.svg'
import whatsapp from '@/assets/whatsapp.svg'
import youtube from '@/assets/youtube.svg'

const Footer = () => {

  const [state, handleSubmit] = useForm("xnqkpwrb");

  if (state.succeeded) {
    
    return (
      <div className={`${styles.container} footerContainer`}>
        <h1 id='thanksMessage' style={{color: '#f3c65d', textShadow: "1px 1px 1px black"}}>Mulțumim pentru mesaj!</h1>
        <div style={{marginBottom: "50vh"}} className={styles.socialButtons}>
          <button 
            onClick={() => window.open('https://www.youtube.com/channel/UC4apD1gnQ3Inzli6ysW5g4Q', '_blank')}
            className={styles.socialButton}>
            <Image
              width={24}
              height={24}
              alt='youtube'
              src={youtube}
            />
          </button>
          <button 
            onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B4916094631562&text&type=phone_number&app_absent=0', '_blank')}
            className={styles.socialButton}>
            <Image
              width={24}
              height={24}
              alt='whatsapp'
              src={whatsapp}
            />
          </button>
          <button 
            onClick={() => window.open('https://www.tiktok.com/@bavariaroparty', '_blank')}
            className={styles.socialButton}>
            <Image
              width={24}
              height={24}
              alt='tiktok'
              src={tiktok}
            />
          </button>
          <button 
            onClick={() => window.open('https://www.facebook.com/BavariaRoPartyKmyEvents', '_blank')}
            className={styles.socialButton}>
            <Image
              width={24}
              height={24}
              alt='Facebook'
              src={facebook}
            
            />
          </button>
          <button 
            onClick={() => window.open('https://www.instagram.com/BavariaRoParty/', '_blank')}
            className={styles.socialButton}>
            <Image
              width={24}
              height={24}
              alt='Instagram'
              src={instagram}
            
            />
          </button>
          <button 
            onClick={() => window.open('https://api.linkr.bio/callbacks/go?url=%2B4916094631562&hash=NXbvQWyX&type=4&id=8oVmVedE', '_blank')}
            className={styles.socialButton}>
            <Image
              width={24}
              height={24}
              alt='telegram'
              src={telegram}
            />
          </button>
        </div>
      </div>
    )
  }



  return (
    <div className={`${styles.container} footerContainer`}>
      <h1 id='contact'>Contact</h1>
      <footer className={styles.footer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input placeholder='Email' type="email" id='email' name='email' />
          <ValidationError
            style={{color: 'red'}}
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <textarea id='message' name='message' placeholder='Mesaj' />
          <ValidationError
            style={{color: 'red'}}
            prefix="Message"
            field="message"
            errors={state.errors} 
          />
          <button className={`${styles.submitButton} button`} type='submit' disabled={state.submitting}>Trimite</button>
        </form>
        <div className={styles.socialButtons}>
          <button 
            onClick={() => window.open('https://www.youtube.com/channel/UC4apD1gnQ3Inzli6ysW5g4Q', '_blank')}
            className={styles.socialButton}>
            <Image
              width={24}
              height={24}
              alt='youtube'
              src={youtube}
            />
          </button>
          <button 
            onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B4916094631562&text&type=phone_number&app_absent=0', '_blank')}
            className={styles.socialButton}>
            <Image
              width={24}
              height={24}
              alt='whatsapp'
              src={whatsapp}
            />
          </button>
          <button 
            onClick={() => window.open('https://www.tiktok.com/@bavariaroparty', '_blank')}
            className={styles.socialButton}>
            <Image
              width={24}
              height={24}
              alt='tiktok'
              src={tiktok}
            />
          </button>
          <button 
            onClick={() => window.open('https://www.facebook.com/BavariaRoPartyKmyEvents', '_blank')}
            className={styles.socialButton}>
            <Image
              width={24}
              height={24}
              alt='Facebook'
              src={facebook}
            
            />
          </button>
          <button 
            onClick={() => window.open('https://www.instagram.com/BavariaRoParty/', '_blank')}
            className={styles.socialButton}>
            <Image
              width={24}
              height={24}
              alt='Instagram'
              src={instagram}
            
            />
          </button>
          <button 
            onClick={() => window.open('https://api.linkr.bio/callbacks/go?url=%2B4916094631562&hash=NXbvQWyX&type=4&id=8oVmVedE', '_blank')}
            className={styles.socialButton}>
            <Image
              width={24}
              height={24}
              alt='telegram'
              src={telegram}
            />
          </button>
        </div>
      </footer> 
    </div>
  )
}

export default Footer

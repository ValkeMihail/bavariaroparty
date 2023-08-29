import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navigation from '@/components/nav/Navigation'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { client } from '@/client-api'
import { GetStaticProps } from 'next'
import { EventType } from '../../types'
import Events from '@/components/events/Events'
import { About } from '@/components/footer/About'


export const getStaticProps : GetStaticProps = async () => {
  
  try {
    const response = await client.getEntries({
      content_type: 'event' 
    })
    return {
      props: {
        events: response.items
      },
      revalidate: 64000   
    }
  } catch (error) {
    console.error('Error fetching events:', error)
    return {
      props: {
        events: []
      }
    }  
  }
}

type HomeProps = {
  events: EventType[]
}


export default function Home(
  {events} : HomeProps
  ) {

    
    const sortedEventsByDate = events.sort((a : EventType, b : EventType) => {
      return new Date(b.fields.startDateAndTime).getTime() - new Date(a.fields.startDateAndTime).getTime()
    })
    const futureEvents = sortedEventsByDate.filter((event : EventType) => {
      return new Date(event.fields.startDateAndTime).getTime() > new Date().getTime()
    })

    const oldEvents = sortedEventsByDate.filter((event : EventType) => {
      return new Date(event.fields.startDateAndTime).getTime() < new Date().getTime()
    })

  return (
    <>          
      <Head>
        <title>BavariaRoParty - Descoperă evenimente românești în Bavaria</title>
        <meta name="description" content="
          BavariaRoParty, organizatori de evenimente românești în Bavaria. Petreceri, concerte, spectacole, evenimente culturale, evenimente sportive, evenimente pentru copii, evenimente pentru familie, evenimente pentru tineri, evenimente pentru adulți, evenimente pentru seniori, evenimente pentru toată lumea, evenimente pentru toate vârstele, evenimente pentru toate gusturile, evenimente pentru toate preferințele, evenimente pentru toate categoriile de vârstă, evenimente pentru toate categoriile de preferințe, evenimente pentru toate categoriile de gusturi, evenimente pentru toate categoriile de vârste, evenimente pentru toate categoriile de preferințe, evenimente pentru toate categoriile de gusturi, evenimente pentru toate categoriile de vârste, evenimente pentru toate categoriile de preferințe, evenimente pentru toate categoriile de gusturi, evenimente pentru toate categoriile de vârste, evenimente pentru toate categoriile de preferințe, evenimente pentru toate categoriile de gusturi, evenimente pentru toate categoriile de vârste, evenimente pentru toate categoriile de preferințe, evenimente pentru toate categoriile de gusturi, evenimente pentru toate categoriile de vârste, evenimente pentru toate categoriile de preferințe, evenimente pentru toate categoriile de gusturi, evenimente pentru toate categoriile de vârste, evenimente pentru toate categoriile de preferințe, evenimente pentru toate categoriile de gusturi 
        " />
        <meta name="keywords" content="
          party, bavaria, romani, romania, romani in bavaria, romani in germania, romani in munchen, romani in nurnberg, romani in augsburg, romani in regensburg, romani in ingolstadt, romani in wurzburg, romani in landshut, romani in kempten, romani in rosenheim, romani in bamberg, romani in bayreuth, romani in erlangen, romani in furth, romani in aschaffenburg, romani in ansbach, romani in regen, romani in cham, romani in schwandorf, romani in weiden, romani in amberg, romani in hof, romani in coburg, romani in kulmbach, romani in lichtenfels, romani in kronach, romani in bayern, romani in germania, romani in europa, romani in lume, romani in strainatate, romani in diaspora, romani in afara, romani in afara granitelor, romani in afara tarii, romani in afara romaniei, romani in afara europei, romani in afara germaniei, romani in afara bavariei, romani in afara bavaria, romani in afara munchen, romani in afara nurnberg, romani in afara augsburg, romani in afara regensburg, romani in afara ingolstadt, romani in afara wurzburg, romani in afara landshut, romani in afara kempten, romani in afara rosenheim, romani in afara bamberg, romani in afara bayreuth, romani in afara erlangen, romani in afara furth, romani in afara aschaffenburg, romani in afara ansbach, romani in afara regen, romani in afara cham, romani in afara schwandorf, romani in afara weiden, romani in afara amberg, romani in afara hof, romani in afara coburg, romani in afara kulmbach, romani in afara lichtenfels, romani in afara
        " />
        <meta name="author" content="BavariaRoParty" />
        <meta name='title' content='BavariaRoParty - Descoperă evenimente românești în Bavaria' />
        <meta name='image' content='https://drive.google.com/uc?export=download&id=1H-Lg0snxfRRp0J9V4CzdaC_1ZeCpH-oW' />
        <meta property='og:image' content='https://drive.google.com/uc?export=download&id=1H-Lg0snxfRRp0J9V4CzdaC_1ZeCpH-oW' />
        <meta property='og:title' content='BavariaRoParty - Descoperă evenimente românești în Bavaria' />
        <meta property='og:description' content='          BavariaRoParty, organizatori de evenimente românești în Bavaria. Petreceri, concerte, spectacole, evenimente culturale, evenimente sportive, evenimente pentru copii, evenimente pentru familie, evenimente pentru tineri, evenimente pentru adulți, evenimente pentru seniori, evenimente pentru toată lumea, evenimente pentru toate vârstele, evenimente pentru toate gusturile, evenimente pentru toate preferințele, evenimente pentru toate categoriile de vârstă, evenimente pentru toate categoriile de preferințe, evenimente pentru toate categoriile de gusturi, evenimente pentru toate categoriile de vârste, evenimente pentru toate categoriile de preferințe, evenimente pentru toate categoriile de gusturi, evenimente pentru toate categoriile de vârste, evenimente pentru toate categoriile de preferințe, evenimente pentru toate categoriile de gusturi, evenimente pentru toate categoriile de vârste, evenimente pentru toate categoriile de preferințe, evenimente pentru toate categoriile de gusturi, evenimente pentru toate categoriile de vârste, evenimente pentru toate categoriile de preferințe, evenimente pentru toate categoriile de gusturi, evenimente pentru toate categoriile de vârste, evenimente pentru toate categoriile de preferințe, evenimente pentru toate categoriile de gusturi, evenimente pentru toate categoriile de vârste, evenimente pentru toate categoriile de preferințe, evenimente pentru toate categoriile de gusturi ' />
        <meta property='og:url' content='https://bavariaroparty.vercel.app' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='BavariaRoParty' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/bavariaroparty.png" />
      </Head>
      <main className={styles.main}>
        <Navigation/>
        <About/>
        <Header upcomingEvents = {futureEvents}/>
        <Events events={oldEvents}/>
        <Footer/>
      </main>
    </>
  )
}

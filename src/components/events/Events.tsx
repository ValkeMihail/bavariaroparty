import styles from './events.module.css'
import React from 'react'
import Event from './Event'
import { EventType } from '../../../types'
import { Carousel } from 'react-responsive-carousel'

type EventsProps = {
  events: EventType[]
}

const Events = ({events} : EventsProps) => {


  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);
  


  return (
    <>
      <h1 
        style={{marginBottom: '0'}}
        className='headingText'>
        Evenimente Anterioare
      </h1>
      <section id="eventsSection" className={styles.eventsSection}> 
        <Carousel className={styles.eventsSlider}
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          swipeable={false}
          showIndicators={false}
          centerMode={isMobile ? false : true}
          centerSlidePercentage={30}
        >
          {events.map((event: EventType, index: number) => (
            <Event key={index} event={event} />
          ))}
        </Carousel>
      </section>
    </>
  )
}

export default Events

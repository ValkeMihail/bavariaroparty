import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './header.module.css'
import { useState, useEffect } from 'react'
import { EventType, Photo } from '../../../types'
import { Carousel } from 'react-responsive-carousel';
import UpcomingEvent from './UpcomingEvent';

type HeaderProps = {
  upcomingEvents : EventType[]
}

const Header = (
  {upcomingEvents} : HeaderProps
) => {

  const [events, setEvents] = useState<EventType[]>([])


  useEffect(() => {
    setEvents(upcomingEvents)
  }, []);

  return (
    <>
      <h1 id='evenimente' className='headingText'>Evenimente Viitoare</h1>
      <div className={styles.headerSlider}>
        <Carousel
          infiniteLoop={true}
          interval={5000}
          stopOnHover={true}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          autoPlay={true}
          swipeable={false}
          className={styles.slideContainer}>
          { events.map((event: EventType) =>  (
              <UpcomingEvent
                key={event.fields.eventPhoto.fields.file.url}
                event={event}
              />
          ))}
          </Carousel>
      </div>
    </>
  )
}

export default Header

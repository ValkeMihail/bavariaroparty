import Image from 'next/image'
import styles from './header.module.css'
import React from 'react'
import { EventType } from '../../../types'
import { useState, useEffect } from 'react'
import { getDayAndMonth } from '@/helpers'
import placeHolder from '@/assets/eventPlaceholder.jpeg'
import { useRouter } from 'next/router'

const UpcomingEvent = ({event} : {event : EventType}) => {

  const router = useRouter()

  const [days, setDays] = useState(24);
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(14);
  const [seconds, setSeconds] = useState(5);

  const eventStartTime = new Date(event.fields.startDateAndTime).getTime();
  const currentTime = new Date().getTime();
  const timeDifference = eventStartTime - currentTime;

  // Use useEffect to update the countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      // Recalculate the time difference
      const currentTime = new Date().getTime();
      const timeDifference = eventStartTime - currentTime;

      // Update the countdown values
      const updatedDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const updatedHours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const updatedMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const updatedSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setDays(updatedDays);
      setHours(updatedHours);
      setMinutes(updatedMinutes);
      setSeconds(updatedSeconds);

      // Clear the interval when the countdown reaches 0
      if (timeDifference <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    // Clean up the timer on unmount
    return () => clearInterval(timer);
  }, [eventStartTime]);


  return (
    <div key={event.fields.eventPhoto.fields.file.url} className={styles.header}>
      <div className={styles.headerLeft}>
        <Image
          className={styles.nextEventImage}
          style={{
            height: "100%",
            width: "100%"
          }}
          width={490}
          height={300}          
          alt="Next Event"
          src={
              event.fields.eventPhoto ? 
              "https:"+event.fields.eventPhoto.fields.file.url :
              placeHolder
            }
        />
      </div>
      <div className={styles.headerRight}>
        <div className={styles.eventDetails}>
          <div className={styles.titleWrap}>
            <h2>
              {event.fields.title}
            </h2>
            <div className={styles.dateWrap}>
              <h3>
                <span className={styles.dateNr}>{getDayAndMonth(event.fields.startDateAndTime).split(' ')[1]}</span>
                <br />
                {getDayAndMonth(event.fields.startDateAndTime).split(' ')[0]}
              </h3>
            </div>
          </div>
          <div className={styles.adress}>
            <span className={styles.firstline}>
              {event.fields.city}
            </span>
            <br />
            {event.fields.country}
          </div>
          <div className={styles.countDown}>
            <div className={styles.countWrap}>
              <h4>
                {days}
              </h4>
              <span>ZILE</span>
            </div>
            <div className={styles.countWrap}>
              <h4>
                {hours}
              </h4>
              <span>ORE</span>
            </div>
            <div className={styles.countWrap}>
              <h4>
                {minutes}
              </h4>
              <span>MINUTE</span>
            </div>
            <div className={styles.countWrap}>
              <h4>
                {seconds}
              </h4>
              <span>SECUNDE</span>
            </div>

          </div>
        </div>
        <button 
          onClick={() => {
            event.fields.eventPhoto.fields.description ? window.open(event.fields.eventPhoto.fields.description, "_blank") : router.push('/#contact')}}
          className={styles.buyTickets}>
          CUMPĂRĂ BILETE
        </button>
      </div>
    </div>
  )
}

export default UpcomingEvent

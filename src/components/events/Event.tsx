import React from 'react'
import styles from "./events.module.css"
import Image from 'next/image'
import { formatDateAndTime } from '@/helpers'
import eventPlaceholder from '@/assets/eventPlaceholder.jpeg'
import { EventType } from '../../../types'


const Event = ({event} : {event : EventType}) => {

  const [startDate , setStartDate] = React.useState('')

  React.useEffect(() => {
    setStartDate(formatDateAndTime(event.fields.startDateAndTime))
  }, [])


  return (
    <div className={styles.eventCard}>
      <Image
        width={490}
        height={300}
        style={{
          width: "100%",
          height: "100%",
        }}
        className={styles.eventImage}
        alt='older event'
        src={event.fields.eventPhoto ? 'https://'+ event.fields.eventPhoto.fields.file.url : eventPlaceholder}
      />
      <div className={styles.cardDetails}>
        <h4>
          {event.fields.startDateAndTime && startDate}
        </h4>
      </div>
    </div>
  )
}

export default Event

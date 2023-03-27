import React, { useEffect } from 'react'
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useState } from 'react';
import Event from './Event';
import moment from 'moment';


const Events = (): JSX.Element => {

  const [events, setEvents] = useState<any>([])

  const eventCollection = collection(db, "events")

  const getEvent = async () => {
    try {
      const data = await getDocs(eventCollection)
      const datas = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }))
      setEvents(datas)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getEvent()
  }, [])

  return (
    <div>
      <div>
        {events?.map((event: { id: React.Key; title: string; description: string; date: Date | any; }) => (
          <li key={event.id}>
            <Event 
              title={event.title} 
              description={event.description} 
              date={moment(event.date.toDate()).format('MMMM Do YYYY, h:mm:ss a')}
            />
          </li>
        ))}
      </div>
    </div>
  )
}

export default Events
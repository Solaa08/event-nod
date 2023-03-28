import { collection, getDocs } from 'firebase/firestore'
import React, { createContext, useContext, useState } from 'react'
import { db } from '../config/firebase';

interface EventType {
    id: React.Key
    title: string
    description: string
    date: Date
}

interface EventContextType {
    events : []
}

interface EventProps {
    children: React.ReactNode
  }

const EventContext = createContext<EventContextType>({events: [] })
const eventCollection = collection(db, "events")

export const EventProvider = ({ children }: EventProps ) : JSX.Element =>{
  const [events,setEvents ] = useState<any>([])
  const tabEvent: { id: string; }[] = []
  const getEvent = async () => {
    try {
      const data = await getDocs(eventCollection)
      const datas = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      datas.map((event) => {
        tabEvent.push(event)
      })
      setEvents(tabEvent)
    } catch (error) {
      console.error(error)
    }
  }
  getEvent()

  return (
    <EventContext.Provider value={{events}}>
      { children }
    </EventContext.Provider>
  )
}

export const useEvent = (): EventContextType => {
  return useContext(EventContext)
}

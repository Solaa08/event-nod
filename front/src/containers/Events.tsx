import React from 'react'
import Event from './Event';
import moment from 'moment';
import { useEvent } from './EventsContext';


const Events = (): JSX.Element => {

  const { events } = useEvent()

  // const eventCollection = collection(db, "events")

  // const getEvent = async () => {
  //   try {
  //     const data = await getDocs(eventCollection)
  //     const datas = data.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id
  //     }))
  //     setEvents(datas)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // useEffect(() => {
  //   getEvent()
  // }, [])

  return (
    <div>
      <div className='flex flex-wrap  mt-3  '>
        {events.map((event: { id: React.Key; title: string; description: string; date: Date | any; }) => (
          <li key={event.id} className='list-none w-1/3 mb-4 '>
            <Event 
              title={event.title} 
              description={event.description} 
              date={moment(event.date).format('MMMM Do YYYY, h:mm:ss a')}
            />
          </li>
        ))}
      </div>
    </div>
  )
}

export default Events
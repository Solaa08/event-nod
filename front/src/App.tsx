import React from 'react'
import './App.css'
import Events from './containers/Events'
import { EventProvider } from './containers/EventsContext'
import { FormEvent } from './containers/FormEvent'


const App = (): JSX.Element => {

  return (
    <div>
      <EventProvider>
        <FormEvent/>
        <Events/>
      </EventProvider>

    </div>

  )
}

export default App

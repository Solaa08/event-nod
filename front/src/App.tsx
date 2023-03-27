import React from 'react'
import './App.css'
import Events from './containers/Events'
import { FormEvent } from './containers/FormEvent'


const App = (): JSX.Element => {

  return (
    <div>
      <FormEvent />
      <Events/>
    </div>

  )
}

export default App

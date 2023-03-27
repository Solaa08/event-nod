import React from 'react'
import './App.css'
import { FormEvent } from './containers/FormEvent'
import Events from './containers/Events';


const App = (): JSX.Element => {

  return (
    <div className='bg-slate-100 w-full h-full block'>
      <FormEvent />
      <Events/>
    </div>

  )
}

export default App

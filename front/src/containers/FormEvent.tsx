import React, { useEffect } from 'react'
import { Field, Form, Label, Submit, Textarea } from '../components/Form'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../config/firebase'

export const FormEvent = (): JSX.Element => {

    interface EventType {
        title: string
        description: string
        date : Date
    }
    const eventCollection = collection(db, "events")

    const addEvent = async (event : EventType) => {
      try {
        await addDoc(eventCollection, event)
      } catch (error) {
        console.error(error)
      }
    }
    
    useEffect(() => {
    // addEvent()
    }, [])
    return (
      <div className='w-full h-full flex justify-center items-center '>

        <div className='w-1/3 h-1/3'>
          <Form onSubmit={(object: any) => { addEvent(object) }}>
            <Label> Titre </Label>
            <Field type="text" name="title" /> 
            <Label> Description </Label>
            <Textarea name="description"></Textarea> 
            <Label> Date </Label>
            <Field type="date" name="date"></Field>
            <Submit>creer</Submit>
          </Form>
        </div>
      </div>
    )
}


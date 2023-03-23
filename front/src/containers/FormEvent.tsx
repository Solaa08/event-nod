import React from 'react'
import { Field, Form, Label, Submit, Textarea } from '../components/Form'

export const FormEvent = (): JSX.Element => {

  return (
    <div className='w-full h-full flex justify-center items-center '>

      <div className='w-1/3 h-1/3'>
        <Form onSubmit={(object: any) => { console.log(object)} }>
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
import React from 'react'
import { Field, Form, Label, Submit, Textarea } from '../components/Form'

export const FormEvent = (): JSX.Element => {

  return (
    <Form onSubmit={(object: any) => { console.log(object)} }>
      <Label> Titre </Label>
      <Field type="text" name="title" /> 
      <Label> Description </Label>
      <Textarea name="description"></Textarea> 
      <Label> Date </Label>
      <Field type="date" name="date"></Field>
      <Submit />
    </Form>
  )
}
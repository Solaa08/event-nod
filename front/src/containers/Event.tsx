import React from 'react'
import { Card, CardTitle, CardSubTitle, CardBody } from '../components/Card'

const Event = (props: any): JSX.Element => {

  return (
    <Card>
      <CardTitle>{props.title}</CardTitle>
      <CardSubTitle>{props.description}</CardSubTitle>
      <CardBody>{props.date}</CardBody>
    </Card>
  )
}

export default Event
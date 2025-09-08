import { Container, Typography } from '@mui/material'
import React from 'react'

export default function Campaign() {
  return (
    <Container>
      <label htmlFor="id">
        <input type="radio" id='id'/>
        <Typography>компании</Typography>
      </label>
    </Container>
  )
}

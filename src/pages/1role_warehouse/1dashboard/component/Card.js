import React from 'react'
import styled from 'styled-components'
import { FaUser } from 'react-icons/fa'

const Container = styled.div`
background:#E6E6E6;
border-radius:10px;
padding:20px 20px;
`


const Angka = styled.strong`
font-size:1.7em;
`

export const Card = ({ data = {}, icon }) => {
  const Icon = styled(icon)`
  font-size:5em;
  `
  return (
    <Container className="container">
      <div className="row">
        <div className="col-md-4"><Icon /></div>
        <div className="col-md-8">
          <div className="row">
            <Angka className="col-md-12">{data.angka}</Angka>
            <div className="col-md-12 mt-3">{data.title}</div>
          </div>
        </div>
      </div>
    </Container>
  )
}

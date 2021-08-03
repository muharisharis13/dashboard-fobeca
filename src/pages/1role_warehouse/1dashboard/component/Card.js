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

const Title = styled.div`
  font-weight:650;
  font-size:20pt;
`

export const Card = ({ data, title, icon }) => {
  const Icon = styled(icon)`
  font-size:5em;
  `
  return (
    <Container className="container">
      <div className="row">
        <div className="col-md-4"><Icon /></div>
        <div className="col-md-8">
          <div className="row">
            <Angka className="col-md-12">{data}</Angka>
            <Title className="col-md-12 mt-1">{title}</Title>
          </div>
        </div>
      </div>
    </Container>
  )
}

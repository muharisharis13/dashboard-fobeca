import React from 'react'
import styled from 'styled-components'
import { FaBell } from 'react-icons/fa'
import { Button } from '../../../../component/element/button/Button'

const Container = styled.div`
background:#E6E6E6;
height:100%;
border-radius:10px;
padding:20px 20px;
display:flex;
justify-content:center;
align-items:center;
border: 2px solid red;
text-align:center;
`

const Strong = styled.strong`
font-size:1.7em;

`

const Bell = styled(FaBell)`
font-size:2em;
`

export const BufferStock = () => {
  return (
    <Container className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 col-sm-12">
          <Strong>
            Buffer Stock Warning
          </Strong>
        </div>
        <div className="col-md-12 col-sm-12 mt-4">
          <Bell />
        </div>
        <div className="col-md-7 col-sm-12 mt-4">
          <Button>See Details</Button>
        </div>
      </div>
    </Container>
  )
}

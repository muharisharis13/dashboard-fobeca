import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width:100vw;
height:100vh;
position:center;
display:flex;
align-items:center;
justify-content:center;
background-color:rgba(0, 0, 0,0.5);
/* opacity:0.05; */
`

export const Loading = function () {
  return (
    <Container>
      loading
    </Container>
  )
}
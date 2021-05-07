import React from 'react'
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'


const Input = styled.input`
border-radius:0px;
height:100%;
width:0%;

border-radius : 50% 0px 0px 50%;
border-right:none;
transition:450ms;

&:focus {
  box-shadow : none;
  outline:grey;
  width:100%;
  outline-color: grey !important;
  border:0.1px solid grey;
  border-radius : 5px 0px 0px 5px;
}

&:hover {
  width:100%;
  border-radius : 5px 0px 0px 5px;
}

`

const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
border-radius:5px 5px 5px 5px;
transition:450ms;


`

const ButtonSearch = styled.span`
  background:#000;
  padding:4.2px 10px;
  color:white;
  left:0;
  margin-left:0;
  border-radius : 0px 5px 5px 0px;
 
`

export const Search = () => {
  return (
    <Wrapper>
      <Input type="text" placeholder="search" className="form-control" />
      <ButtonSearch>
        <FaSearch />
      </ButtonSearch>
    </Wrapper>
  )
}

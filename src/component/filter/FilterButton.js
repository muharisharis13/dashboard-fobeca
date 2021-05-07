import React, { useState } from 'react'
import styled from 'styled-components'
import { Nav } from 'react-bootstrap'

const ListFilterButton = styled.ul`
font-weight: 700;
color:black !important;
`

const List = styled.a`
color:'black' !important;
`

const NavLink = styled(Nav.Link)`
background : ${({ select }) => (select ? 'grey' : 'transparent')};
color : ${({ select }) => (select ? 'white' : 'black')};
font-weight:bold;
border-radius:50px;
font-size:12px;

&:hover {
  color:${({ select }) => (select ? 'white' : 'black')};
}
`

export const FilterButton = () => {
  const [select, setSelect] = useState('new')

  const btnselect = (value) => setSelect(value)
  return (
    <div className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="col-md-2 col-sm-12">
        Sort By :
      </div>
      <div className="col-md-10 col-sm-12">
        <Nav>
          <Nav.Item  >
            <NavLink select={select === "new" ? true : false} onClick={() => btnselect('new')} >Newest</NavLink>
          </Nav.Item>
          <Nav.Item >
            <NavLink select={select === "old" ? true : false} onClick={() => btnselect('old')} >Oldest</NavLink>
          </Nav.Item>
          <Nav.Item >
            <NavLink select={select === "today" ? true : false} onClick={() => btnselect('today')} >Today</NavLink>
          </Nav.Item>
          <Nav.Item >
            <NavLink select={select === "month" ? true : false} onClick={() => btnselect('month')} >This Month</NavLink>
          </Nav.Item>

        </Nav>
      </div>
    </div>
  )
}

import React, { useState, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Context } from '../../config/Context'

const SideBarLink = styled(NavLink)`
display:flex;
color: ${({ itemPath }) => (itemPath === window.location.pathname ? '#fff' : '#000')};
justify-content: space-between;
align-items:center;
padding:20px;
list-style:none;
height:40px;
text-decoration: none;
font-size:18px;
position:relative;
transition:450ms;
font-weight:650;
left:0%;
background-color : ${({ itemPath }) => (itemPath === window.location.pathname ? '#000' : 'transparent')};

border-radius:5px;

&:hover {
  background : #000;
  cursor:pointer;
  text-decoration: none;
  color:white;
  border-radius:5px;
  
}
`

const SiderBarLabel = styled.span`
margin-left:16px;
`

const DropDwonLink = styled(NavLink)`
height: ${({ navbar }) => (navbar ? '40px' : '0px')};
padding-left:2rem;
display:flex;
align-items: center;
text-decoration:none;
color: ${({ itemPath }) => (itemPath === window.location.pathname ? '#fff' : '#000')};
font-size:18px;
transition:340ms;
background-color : ${({ itemPath }) => (itemPath === window.location.pathname ? '#000' : 'transparent')};
border-radius:5px;

transition: height 0.5s;
transition-timing-function: ease;

&:hover {
  background: #000;
  cursor:pointer;
  color:#fff;
  text-decoration:none;
  border-radius:5px;
}
`

const ListDropdown = styled.div`
display:${({ subnav }) => (subnav ? 'block' : 'none')};
padding-left:20px;
`

export const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false)
  const { dispatch, showSideBar } = useContext(Context)

  const ShowSubnav = () => setSubnav(!subnav)
  const BtnShow = (data) => {
    if (data !== undefined) {
      if (data.altKey === false) {
        dispatch({
          type: 'SHOWSIDEBAR', showSideBar: !showSideBar
        })
      }
      else {
        return null
      }
    }
    else if (data === undefined) {
      dispatch({
        type: 'SHOWSIDEBAR', showSideBar: !showSideBar
      })
    }
  }


  return (
    <div style={{ marginTop: '20px' }}>

      <SideBarLink itemPath={item.path} to={item.path} onClick={() => { item.subNav && ShowSubnav(); }}>
        <div>
          {item.icon}
          <SiderBarLabel>{item.title}</SiderBarLabel>
        </div>
        <div style={{ position: 'absolute', right: '20px' }}>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
              ? item.iconClosed
              : null}
        </div>
      </SideBarLink>


      {subnav && item.subNav.map((item, index) => (
        <DropDwonLink navbar={subnav} itemPath={item.path} to={item.path} key={index}  >
          {item.icon}
          <ListDropdown subnav={subnav}>
            {item.title}
          </ListDropdown>
        </DropDwonLink>
      ))}
    </div>
  )
}

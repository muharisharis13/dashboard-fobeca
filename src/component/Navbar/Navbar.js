import React, { useState, useContext, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';

import styled from 'styled-components'
import { SubMenu } from './SubMenu';
import { Context } from '../../config/Context';
import { FaBars, FaSignOutAlt } from 'react-icons/fa'
import Logo from '../../images/logo.png'
import { cookiesGet, cookiesRemove } from '../../config/Cookies';



const SideBarLink = styled(NavLink)`
display:flex;
color: ${({ itemPath }) => (itemPath === window.location.pathname ? '#fff' : '#000')};
justify-content: space-beetwen;
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

border-radius:10px;

&:hover {
  background : #000;
  cursor:pointer;
  text-decoration: none;
  color:white;
  border-radius:10px;
  
}
`

const SiderBarLabel = styled.span`
margin-left:16px;
`

const WrapperProfil = styled.div`
margin-top:20px;
display:flex;
align-items:center;
flex-direction: column;
align-items:center;
justify-content:center;
text-align:center
`

const ImgProfile = styled.img`
object-fit:cover;
height:100px;
width:100px;
border-radius:100%;
`

const ButtonEdit = styled.div`
color: #3100D9;
`

const Bars = styled(FaBars)`
display:none;

@media (max-width: 768px){
  display:unset;
}
`

function Navbar() {
  const { dispatch, showSideBar } = useContext(Context);


  const show = () => {
    dispatch({
      type: 'SHOWSIDEBAR', showSideBar: !showSideBar
    })

  }


  // const showSidebar = () => setSidebar(!sidebar);

  const LogOut = () => {
    sessionStorage.removeItem('token');
    cookiesRemove({ key: 'token' })
    cookiesRemove({ key: 'outlet' })
    cookiesRemove({ key: 'app_token' })
    cookiesRemove({ key: 'email' })
    window.location.href = '/login'
  }

  let textJam = ''
  let jam = new Date().getHours();

  if (jam >= 1 && jam <= 11) {
    textJam = "Good Morning"
  }
  else if (jam >= 12 && jam <= 18) {
    textJam = "Good Afternoon"
  }
  else if (jam >= 19 && jam <= 24) {
    textJam = "Good Night"
  }













  return (

    window.location.pathname === "/login" ?
      null
      :
      <>
        <nav className='navbar' style={{ width: '100%' }}>
          <div className="row" style={{ width: '100%' }}>
            <div className="col">
              <div className='menu-bars'>
                <span>
                  <Bars onClick={show} style={{ color: 'black', fontSize: "20px" }} />
                </span>
              </div>

            </div>
            {/* <div className="col" style={{ alignItems: 'center', justifyContent: 'start', display: 'flex' }}>
              <div className="row" style={{ width: '100%' }}>
                <div className="col-sm-6">
                  <strong>Role : {'asdadadasd'}</strong>
                </div>
                <div className="col-sm-6">
                  <strong>Location : {'asdadadasd'}</strong>
                </div>
              </div>
            </div> */}
          </div>
        </nav>

        <nav className={showSideBar ? 'nav-menu active' : 'nav-menu'}>
          <ul style={{ position: 'relative' }} className='nav-menu-items'>
            <div className='navbar-toggle' style={{ display: 'flex', justifyContent: 'space-between' }}>
              <img src={Logo} alt="Logo" width={40} />
              <div className='menu-bars'>
                <Bars onClick={show} style={{ color: 'black', fontSize: "20px", right: '0px' }} />
              </div>
            </div>

            <WrapperProfil>
              <div className="row">
                <div className="col-md-col-sm-12">
                  <ImgProfile src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profil" />
                </div>
                <div className="col-md-12 col-sm-12">
                  <strong>{textJam}, {cookiesGet({ key: 'email' })}</strong>
                </div>
                {/* <div className="col-md-12 col-sm-12">
                  <ButtonEdit className="btn">Edit Profil</ButtonEdit>
                </div> */}
              </div>
            </WrapperProfil>

            <div style={{ overflowY: 'scroll', height: '350px' }}>
              {
                SidebarData.map((item, index) => (
                  <SubMenu item={item} key={index} />
                ))
              }

              <SideBarLink itemPath='/login' to='/login'
                onClick={LogOut}
              >
                <FaSignOutAlt />
                <SiderBarLabel>Log Out</SiderBarLabel>
              </SideBarLink>

            </div>



          </ul>
        </nav>
      </>


  );

}

export default Navbar;

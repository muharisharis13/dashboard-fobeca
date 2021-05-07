import React, { useState, useContext } from 'react'
import LogoIcon from '../../images/logo.png'
import styled, { css } from 'styled-components/macro'
import { FaUserCircle, FaLock } from 'react-icons/fa'
import { cookiesGet, cookiseSet } from '../../config/Cookies'
import { MakePost } from '../../config/FunctionAPI'
import { Context } from '../../config/Context'
import { Redirect } from 'react-router-dom'

const RowLogo = styled.div`
align-items:center;
text-align:center;
`

const H2Login = styled.h3`
font-weight:650;
text-transform:uppercase;
margin-top:20px;
`

const FormLogin = styled.div`
align-items:center;
text-align:center;
justify-content:center;
margin-top:20px;
`

const WrapperLogin = styled.div`
box-shadow:0px 0px 27px -1px rgba(0,0,0,0.34);
padding:50px 70px;
border-radius:10px;
`

const Input = css`
box-shadow:none !important;
border-radius:0px 10px 10px 0px;
border-left:none;
`

const InputUserName = styled.input`
${Input}
`

const WrapperInput = styled.div`
display:flex;
`

const WrapperIcon = styled.span`
background:#000;
padding:0px 10px;
align-items:center;
justify-content:center;
display:flex;
font-size:1.5em;
border-radius:10px 0px 0px 10px;
color:white;
`

const ButtonLogin = styled.div`
width:100%;
background:#000 !important;
color:#fff;
padding:3px 10px;
font-weight:650;
font-size:1.3em;
border-radius:10px;
border:none;
`

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const [redirect, setRedirect] = useState(false)
  const { dispatch } = useContext(Context)

  const onChangeValue = (e, value) => {

    if (value === 'email') {
      setData({ ...data, email: e.target.value })
    }
    else if (value === 'password') {
      setData({ ...data, password: e.target.value })
    }
  }


  const btnLogin = () => {

    MakePost(`/login`, data)
      .then(res => {
        if (res.status === 'OK') {
          setRedirect(true)
          console.log(res)
          // setDataApi(res)
          // sessionStorage.setItem('token', res.token)
          cookiseSet({ key: 'outlet', value: JSON.stringify(res.user.outlet_incharge), expires: Infinity })
          cookiseSet({ key: 'token', value: res.token, expires: Infinity })
          cookiseSet({ key: 'app_token', value: res.user.app_token, expires: Infinity })
          cookiseSet({ key: 'email', value: data.email, expires: Infinity })
          // console.log(res.user.outlet_incharge)
        }
      })
  }

  if (redirect) {
    return window.location.href = "/"
  }
  return (
    <div className="container">
      <RowLogo className="row mt-5">
        spv01@fobeca.id <br />
        Supervisor01 <br />
        <div className="col-md-12 col-sm-12">
          <img width={100} src={LogoIcon} alt="logo" />
        </div>
        <div className="col-md-12 col-sm-12">
          <H2Login>Fobeca Login</H2Login>
        </div>
      </RowLogo>

      <FormLogin className="row">
        <WrapperLogin className="col-md-5 col-sm-10">
          <div className="row">
            <WrapperInput className="col-md-12 col-sm-12">
              <WrapperIcon>
                <FaUserCircle />
              </WrapperIcon>
              <InputUserName placeholder="Password" type="text" className="form-control"
                value={data.email}
                onChange={(e) => onChangeValue(e, 'email')}
              />
            </WrapperInput>
            <WrapperInput className="col-md-12 col-sm-12 mt-3">
              <WrapperIcon>
                <FaLock />
              </WrapperIcon>
              <InputUserName placeholder="Password" type="password" className="form-control"
                value={data.password}
                onChange={(e) => onChangeValue(e, 'password')}
              />
            </WrapperInput>
          </div>

          <div className="row mt-5">
            <div className="col-md-12 col-sm-12">
              <ButtonLogin className="btn btn-primary"
                onClick={btnLogin}
              >
                Login
              </ButtonLogin>
            </div>
          </div>
        </WrapperLogin>
      </FormLogin>



    </div>
  )
}

export default Login

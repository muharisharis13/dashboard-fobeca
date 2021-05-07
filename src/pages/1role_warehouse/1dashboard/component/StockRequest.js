import React from 'react'
import styled from 'styled-components'
import { FaBell } from 'react-icons/fa'
import { Button } from '../../../../component/element/button/Button'


const Wrapper = styled.div`
background-color:#E6E6E6;
padding:10px 20px;
border-radius:10px;
border:2px solid red;
`


export const StockRequest = () => {
  return (
    <Wrapper className="container">
      <div className="row">
        <div className="col-sm-3">
          <FaBell />
        </div>
        <div className="col-sm-9">
          <strong>Stocks Request From</strong>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          Fobeca Cemara Asri
      </div>
        <div className="col-sm-12">
          Fobeca Cemara Asri
      </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label >2 more</label>
        </div>
        <div className="col-md-6">
          <Button to="/StockReuest">See Detail</Button>
        </div>
      </div>
    </Wrapper>
  )
}

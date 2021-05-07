import React, { useState, useEffect, useContext } from 'react'
import Horloge from '../../../component/Horloge/Horloge'
import { Card } from './component/Card'
import { StockRequest } from './component/StockRequest'
import { FaUser, FaExchangeAlt, FaLuggageCart, FaBoxes } from 'react-icons/fa'
import { BufferStock } from './component/BufferStock'
import { Redirect } from 'react-router-dom'
import { Context } from '../../../config/Context'

const Dashboard = () => {
  const [data, setData] = useState({
  })
  const outlet2 = sessionStorage.getItem('outlet')

  // const [outlet, setoutlet] = useState(outlet2)

  // console.log('ini outlet', outlet)

  const { outlet } = useContext(Context)

  console.log(outlet)




  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-7 col-sm-12 mt-3">
          <Horloge />
        </div>
        <div className="col-md-5 col-sm-12 mt-3">
          <StockRequest />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-7 col-sm-12">
          <div className="row">
            <div className="col-md-6 mt-2">
              <Card
                data={data}
                icon={FaUser}
              />
            </div>
            <div className="col-md-6 mt-2">
              <Card
                data={data}
                icon={FaExchangeAlt}
              />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6 mt-2">
              <Card
                data={data}
                icon={FaLuggageCart}
              />
            </div>
            <div className="col-md-6 mt-2">
              <Card
                data={data}
                icon={FaBoxes}
              />
            </div>
          </div>
        </div>
        <div className="col-md-5 col-sm-12 mt-2">
          <BufferStock />
        </div>
      </div>
    </div>
  )
}

export default Dashboard

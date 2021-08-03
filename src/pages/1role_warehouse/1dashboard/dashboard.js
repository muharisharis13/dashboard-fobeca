import React, { useState, useEffect, useContext } from 'react'
import Horloge from '../../../component/Horloge/Horloge'
import { Card } from './component/Card'
import { StockRequest } from './component/StockRequest'
import { FaUser, FaExchangeAlt, FaLuggageCart, FaBoxes } from 'react-icons/fa'
import { BufferStock } from './component/BufferStock'
import { Redirect } from 'react-router-dom'
import { Context } from '../../../config/Context'
import { Loading } from '../../../component/loading'

const Dashboard = () => {
  const [data, setData] = useState({
  })
  const { apiwarehouse, datacourier, datapurchasing, datacart } = useContext(Context)


  useEffect(() => {
    apiwarehouse({ type: 'API_GET_COURIER' })
    apiwarehouse({ type: 'API_GET_PURCHASING' })
    apiwarehouse({ type: 'API_GET_CART' })
  }, [])

  // console.log('ini data courier : ', datacourier.length)

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
                data={datacourier.length}
                icon={FaUser}
                title="Courier"
              />
            </div>
            <div className="col-md-6 mt-2">
              <Card
                data={datapurchasing.length}
                icon={FaExchangeAlt}
                title="Purchasing"
              />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6 mt-2">
              <Card
                data={datacart.length}
                icon={FaLuggageCart}
                title="Total Cart"
              />
            </div>
            <div className="col-md-6 mt-2">
              <Card
                data={''}
                icon={FaBoxes}
                title="Manage Stock"
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

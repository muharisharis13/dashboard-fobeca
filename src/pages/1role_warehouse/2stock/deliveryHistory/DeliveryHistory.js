import React, { useContext, useEffect, useState } from 'react'
import { DatePicker } from '../../../../component/Date/DatePicker'
import { ModalViewHistoryDelivery } from '../../../../component/modal/stock/ModalViewHistoryDelivery'
import { Context } from '../../../../config/Context'
import { TableData } from './component/TableData'

export const DeliveryHistory = () => {
  const { passing, apiwarehouse, loading } = useContext(Context)


  useEffect(() => {
    apiwarehouse({ type: 'API_GET_DELIVERY_OUTSTOCK' })
  }, [])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h2>Delivery History</h2>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-2">Filter by date</div>
        <div className="col-md-1">From</div>
        <div className="col-md-4">
          <DatePicker
            selected={new Date()}
          />
        </div>
        <div className="col-md-1">to</div>
        <div className="col-md-4">
          <DatePicker
            selected={new Date()}
          />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-12 col-sm-12">
          {
            loading ? 'Loading . . . ' :
              <TableData
                data={passing}
              />
          }

        </div>
      </div>
    </div>
  )
}

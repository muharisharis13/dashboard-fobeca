import React from 'react'
import { TableData } from './component/TableData'
import datajson from '../../../../datajson/stock.json'

export const CurrentStock = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <TableData
            data={datajson}
          />
        </div>
      </div>
    </div>
  )
}

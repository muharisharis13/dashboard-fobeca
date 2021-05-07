import React, { useState, useEffect } from 'react'
import { TableData } from './component/TableData'
import datatable from '../../../../datajson/stock.json'

export const InStock = () => {
  const [data, setData] = useState({
    datatable: datatable
  })





  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <TableData
            data={data.datatable}
            data2={data}
            setData={setData}
          />
        </div>
      </div>

    </div>
  )
}

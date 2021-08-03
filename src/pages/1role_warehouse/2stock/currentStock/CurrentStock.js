import React, { useContext, useEffect } from 'react'
import { TableData } from './component/TableData'
import datajson from '../../../../datajson/stock.json'
import { Context } from '../../../../config/Context'

export const CurrentStock = () => {
  const { passing, apiwarehouse, loading } = useContext(Context)

  const getData = () => {
    apiwarehouse({ type: 'API_GET_CURRENT_STOCK' })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          {
            loading ? 'Loading . . .' :
          <TableData
                data={passing.length > 0 ? passing : []}
          />
          }
        </div>
      </div>
    </div>
  )
}

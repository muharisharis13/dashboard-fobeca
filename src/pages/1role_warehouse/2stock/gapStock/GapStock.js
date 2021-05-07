import React, { useState, useEffect } from 'react'
import Dropdown from '../../../../component/dropdown/Dropdown2'
import datawilayah from '../../../../datajson/data_wilayah.json'
import { TableData } from './component/TableData'
import datagap from '../../../../datajson/data_gap_stock.json'
import { cookiesGet } from '../../../../config/Cookies'
import { MakeGet } from '../../../../config/FunctionAPI'


export const GapStock = () => {
  const [outlet] = useState(JSON.parse(cookiesGet({ key: 'outlet' })))
  const [data, setdata] = useState({
    valueOutlet: '',
    loading: false,
    result: []
  })

  const onChangeValue = e => {
    setdata({
      ...data,
      valueOutlet: e
    })
  }


  const getData = () => {
    setdata({ ...data, loading: true })

    MakeGet({
      url: `/stock/adjustment/list?outlet_id=${data.valueOutlet}`
    })
      .then(res => {
        // console.log(res)
        if (res.status === 'OK') {
          setdata({
            ...data,
            loading: false,
            result: res.data
          })

        }
      })
  }

  useEffect(() => {
    getData()
  }, [data.valueOutlet])

  console.log(data.result)

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <Dropdown
            optionsvalue={outlet}
            value={data.valueOutlet}
            onChange={onChangeValue}
          />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12 col-sm-12">
          <TableData
            data={data.result}
          />
        </div>
      </div>
    </div>
  )
}

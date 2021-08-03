import React, { useState, useEffect, useContext } from 'react'
import { cookiesGet, cookiesRemove } from '../../../../config/Cookies'
import { MakeGet, MakePost, RenewToken } from '../../../../config/FunctionAPI'
import { TableData } from './component/TableData'
import Dropdown from '../../../../component/dropdown/Dropdown2'
import { DatePicker } from '../../../../component/Date/DatePicker'
import moment from 'moment'
import { Select } from '../../../../component/Select/Select'
import { Context } from '../../../../config/Context'

export const History = () => {
  const [outlet, setOutlet] = useState(JSON.parse(cookiesGet({ key: 'outlet' })))
  const [valueOutlet, setValueOutlet] = useState('')
  const [date, setDate] = useState({
    start: new Date(),
    end: new Date()
  })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState([])
  const format = 'YYYY-MM-DD'
  const { apiomney, datacart } = useContext(Context)
  const [optionsOutlet, setOptionsOutlet] = useState([])
  const [selectedOptions, setSelectedOptions] = useState('')



  const getData = async function () {
    setLoading(true)
    MakeGet({ url: `/stock/replenishment/list?outlet_id=${selectedOptions.value}` })
      .then(res => {
        // console.log('ini hasil result', res)
        if (res.error) {
          alert(res.error)
          cookiesRemove({ key: 'token' })
          RenewToken()

          setLoading(false)
        }
        else if (res.status) {

          setResult(res.data)
          // console.log('result :', res)
          setLoading(false)
        }
      })
  }

  useEffect(() => {
    apiomney({ type: 'API_GET_CART' })
  }, [])

  useEffect(() => {
    datacart.map(item => (
      optionsOutlet.push({
        value: `${item.outlet_id}`,
        label: `${item.outlet_name}`
      })
    ))
  }, [datacart])




  const btnFilterDate = ({ start, end }) => {
    setLoading(true)
    setDate({ ...date, start: start, end: end })
    // console.log('ini start : ', start)
    // console.log('ini end : ', end)
    // console.log(`/stock/replenishment/list?outlet_id=${selectedOptions.value}&start_date=${moment(start).format(format)}&end_date=${moment(end).format(format)}`)

    MakeGet({ url: `/stock/replenishment/list?outlet_id=${selectedOptions.value}&start_date=${moment(start).format(format)}&end_date=${moment(end).format(format)}` })
      .then(res => {
        if (res.error) {
          alert(res.error)
          // cookiesRemove({ key: 'token' })
          // RenewToken()

          setLoading(false)
        }
        else if (res.status) {

          setResult(res.data)

          setLoading(false)
        }
      })
  }

  const onChangeValueselect = e => {
    setSelectedOptions(e)
  }



  useEffect(() => {
    getData()
  }, [selectedOptions])




  // console.log('ini cart : ', datacart)

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h3>History In Stock Outlet</h3>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4 col-sm-12 pb-2">
          <Select
            propsOptions={optionsOutlet}
            setSelectedOptions={onChangeValueselect}
            selectedOption={selectedOptions}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <div style={{ padding: '0px 10px' }}>
              From
            </div>
            <div>
              <DatePicker
                selected={date.start}
                onChange={(start) => btnFilterDate({ start: start, end: date.end })}
              />
            </div>
            <div style={{ padding: '0px 10px' }}>
              To
            </div>
            <div>
              <DatePicker
                selected={date.end}
                onChange={(end) => btnFilterDate({ start: date.start, end: end })}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-12 col-sm-12">
          {loading === false ?

            <TableData
              data={result}
            />
            : 'Loading. . . .'
          }
        </div>
      </div>
    </div>
  )
}

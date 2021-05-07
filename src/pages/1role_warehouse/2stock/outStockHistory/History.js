import React, { useState, useEffect } from 'react'
import { cookiesGet, cookiesRemove } from '../../../../config/Cookies'
import { MakeGet, MakePost, RenewToken } from '../../../../config/FunctionAPI'
import { TableData } from './component/TableData'
import Dropdown from '../../../../component/dropdown/Dropdown2'
import { DatePicker } from '../../../../component/Date/DatePicker'
import moment from 'moment'

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



  const getData = async function () {
    setLoading(true)
    MakeGet({ url: `/stock/replenishment/list?outlet_id=${valueOutlet}` })
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

          setLoading(false)
        }
      })
  }

  const btnDropDown = (e) => {
    setValueOutlet(e)
  }

  const btnFilterDate = ({ start, end }) => {
    setLoading(true)
    setDate({ ...date, start: start, end: end })
    // console.log('ini start : ', start)
    // console.log('ini end : ', end)
    // console.log(`/stock/replenishment/list?outlet_id=${valueOutlet}&start_date=${moment(start).format(format)}&end_date=${moment(end).format(format)}`)

    MakeGet({ url: `/stock/replenishment/list?outlet_id=${valueOutlet}&start_date=${moment(start).format(format)}&end_date=${moment(end).format(format)}` })
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



  useEffect(() => {
    getData()
  }, [valueOutlet !== '' ? valueOutlet : null])






  return (
    <div className="container-fluid">
      {/* {
        JSON.stringify(outlet)
      } */}
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h3>History Out Stock</h3>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4 col-sm-12 pb-2">
          <Dropdown
            optionsvalue={outlet}
            value={valueOutlet}
            onChange={(e) => btnDropDown(e)}
            width="small"
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

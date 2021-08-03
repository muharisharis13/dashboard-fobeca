import React, { useState, useEffect, useContext } from 'react'
import Dropdown from '../../../../component/dropdown/Dropdown2'
import datawilayah from '../../../../datajson/data_wilayah.json'
import { TableData } from './component/TableData'
import datagap from '../../../../datajson/data_gap_stock.json'
import { cookiesGet } from '../../../../config/Cookies'
import { MakeGet } from '../../../../config/FunctionAPI'
import { Select } from '../../../../component/Select/Select'
import { Context } from '../../../../config/Context'
import { DatePicker } from '../../../../component/Date/DatePicker'


export const GapStock = () => {
  const [optionsOutlet] = useState([])
  const [data, setdata] = useState({
    valueOutlet: ''
  })
  const [date, setDate] = useState({
    start: new Date(),
    end: new Date()
  })
  const { apiomney, datacart, loading, passing } = useContext(Context)

  const onChangeValueselect = e => {
    setdata({
      ...data,
      valueOutlet: e
    })
  }



  useEffect(async () => {
    await apiomney({ type: 'API_GET_CART' })
  }, [])

  useEffect(async () => {
    await datacart.map((item, index) => (
      optionsOutlet.push({
        value: `${index}`,
        label: `${item.outlet_name}`
      })
    ))
  }, [])


  const getData = () => {
    apiomney({
      type: 'API_ADJUST_STOCK',
      id: datacart[data.valueOutlet.value].outlet_id
    })

    // setdata({ ...data, loading: true })

    // MakeGet({
    //   url: `/stock/adjustment/list?outlet_id=${data.valueOutlet.value}`
    // })
    //   .then(res => {
    //     // console.log(res)
    //     if (res.status === 'OK') {
    //       setdata({
    //         ...data,
    //         loading: false,
    //         result: res.data
    //       })

    //     }
    //   })
  }

  const btnFilterDate = function (date2, type) {

    if (type === 'start') {
      setDate({
        ...date,
        start: date2
      })
      apiomney({
        type: 'API_ADJUST_STOCK',
        id: datacart[data.valueOutlet.value].outlet_id,
        start: date2,
        end: date.end
      })

    }
    else if (type === 'end') {
      setDate({
        ...date,
        end: date2
      })
      apiomney({
        type: 'API_ADJUST_STOCK',
        id: datacart[data.valueOutlet.value].outlet_id,
        start: date.start,
        end: date2
      })
    }

  }



  useEffect(() => {
    if (data.valueOutlet) {
      getData()

    }
  }, [data.valueOutlet])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <Select
            propsOptions={optionsOutlet}
            setSelectedOptions={onChangeValueselect}
            selectedOption={data.valueOutlet}
          />

        </div>
        {
          data.valueOutlet &&
          <>
            <div className="col-md-4 col-sm-12" style={{ display: 'flex', alignItems: 'center' }}>
              From : &nbsp;
              <DatePicker
                selected={date.start}
                onChange={(date) => btnFilterDate(date, 'start')}
              />
            </div>
            <div className="col-md-4 col-sm-12" style={{ display: 'flex', alignItems: 'center' }}>
              To : &nbsp;
              <DatePicker
                selected={date.end}
                onChange={(date) => btnFilterDate(date, 'end')}
              />
            </div>
          </>
        }
      </div>


      <div className="row mt-5">
        <div className="col-md-12 col-sm-12">
          {
            loading ? 'Loading . . .' :
              <TableData
                data={passing ? passing : []}
                selectedOutlet={data.valueOutlet}
              />
          }
        </div>
      </div>
    </div>
  )
}

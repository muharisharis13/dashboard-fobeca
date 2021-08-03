import React, { useState, useEffect, useContext } from 'react'
import { FaPlus, FaPrint } from 'react-icons/fa'
import { Button, ButtonVDiv } from '../../../../component/element/button/Button'
import { Select } from '../../../../component/Select/Select'
import { DataTable } from './component/DataTable'
import datastock from '../../../../datajson/stock.json'
import { Context } from '../../../../config/Context'

export const OutStock1 = () => {
  const { passing, apiwarehouse, datacourier, datacart, dispatch, loading } = useContext(Context)
  const [data, setData] = useState([])
  const [dataInput, setDataInput] = useState({})
  const [qty, setQty] = useState(0)
  let options
  let optionsCourier = []
  const optionsOutlet = []
  const [selectedOptions, setSelectedOptions] = useState('')
  const [selectedCourier, setSelectedCourier] = useState('')
  const [selectedOutlet, setSelectedOutlet] = useState('')


  useEffect(() => {
    apiwarehouse({ type: 'API_GET_CURRENT_STOCK' })
    apiwarehouse({ type: 'API_GET_COURIER' })
    apiwarehouse({ type: 'API_GET_CART' })
  }, [])

  // useEffect(() => {
  //   if (passing !== undefined) {
  //     passing.map((item, index) => (
  //       options.push({ value: `${index}`, label: `${item.nama_item}` })
  //     ))

  //   }
  //   // console.log(passing)
  // }, [options])

  options = passing ? passing.map((item, index) => ({ value: index, label: item.nama_item })) : []

  optionsCourier = datacourier ? datacourier.map(item => ({ value: item._id, label: item.full_name })) : []


  console.log('ini courier : ', datacourier)

  // useEffect(() => {
  //   datacourier.map((item, index) => (
  //     optionsCourier.push({ value: `${item._id}`, label: `${item.full_name}` })
  //   ))
  // }, [optionsCourier])

  useEffect(() => {
    datacart.map((item, index) => (
      optionsOutlet.push({ value: `${item.outlet_id}`, label: `${item.outlet_name}` })
    ))
  }, [optionsOutlet])

  useEffect(() => {
    setDataInput(passing[selectedOptions.value])
  }, [options])



  const onChaneQty = (e) => {
    setQty(e.target.value.replace(/[^0-9]+/g, ''))
  }


  const btnAddMoreItems = () => {

    setData([
      ...data,
      {
        "name": `${dataInput.nama_item}`,
        "qty": `${qty}`,
        "uom": `${dataInput.vom}`,
        "_id": `${dataInput._id}`,
      }
    ])

    passing[selectedOptions.value].qty = passing[selectedOptions.value].qty - qty

  }


  // console.log(passing)

  return (
    <div className="container-fluid">
      {/* {JSON.stringify(data)} <br /> */}
      <div className="row">
        <div className="col-md-4 col-sm-12 mt-2">
          <Select
            placeholder="Select Outlet..."
            propsOptions={optionsOutlet}
            selectedOption={selectedOutlet}
            setSelectedOptions={setSelectedOutlet}
          />
        </div>
        <div className="col-md-4 col-sm-12 mt-2">
          <Select
            placeholder="Select Courier..."
            propsOptions={optionsCourier}
            selectedOption={selectedCourier}
            setSelectedOptions={setSelectedCourier}
          />
        </div>
        {/* <div className="col-md-2 col-sm-12 mt-2">
          <Button to="/Stock/outstocks/history">
            Out Stock History
          </Button>
        </div> */}
        <div className="col-md-2 col-sm-12 mt-2">
          <Button to="/Stock/delivery/history">
            Delivery History
          </Button>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-3">
          <Button to={{
            pathname: '/review',
            datatable: data,
            courier: selectedCourier,
            outlet: selectedOutlet
          }}>
            <FaPrint /> &nbsp;
            Print Delivery Order
          </Button>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-12 col-sm-12">
          <DataTable
            data={data}
            options={options}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            propsInput={dataInput ? dataInput : {}}
            onChangeQty={onChaneQty}
            qty={qty}
            setQty={setQty}

          />
        </div>
        <div className="col-md-4 col-sm-12">
          <ButtonVDiv onClick={qty === 0 || qty === '' ? '' : btnAddMoreItems} disabled={qty === 0 || qty === '' ? true : false}>
            <FaPlus /> &nbsp;
            Add More Items
          </ButtonVDiv>
        </div>
      </div>
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import { Button, ButtonVDiv } from '../../../../component/element/button/Button'
import Dropdown from '../../../../component/dropdown/Dropdown2'
import datawilayah from '../../../../datajson/data_wilayah.json'
import dataowner from '../../../../datajson/data_wilayah_owner.json'
import { FaPlus, FaPrint } from 'react-icons/fa'
import datastock from '../../../../datajson/stock.json'
import { DataInput } from './component/DataInput'
import { DataTable } from './component/DataTable'

export const OutStock = () => {
  const [name, setname] = useState({})
  const [uom, setuom] = useState({})
  const [quantity, setquantity] = useState('')
  const [data, setdata] = useState({
    wilayah: '',
    owner: '',
    Namastock: '',
    dataprops: {},
    datatable: []
  })

  const onChange = (e, value, index) => {
    // console.log(index)
    if (value === 'wilayah') {
      setdata({
        ...data,
        wilayah: e
      })
    }
    else if (value === 'owner') {
      setdata({
        ...data,
        owner: e
      })
    }
    else if (value === 'stock') {
      setdata({
        ...data,
        Namastock: e,
        dataprops: datastock[index]
      })

      setname(datastock[index].name)
      setuom(datastock[index].uom)

    }
    else if (value === 'inputqty') {
      setquantity(e.target.value.replace(/[^0-9]+/g, ''))
    }
  }

  const btnAddDataTable = () => {
    data.datatable.push({ name: name, qty: quantity, uom: uom })
    setdata({
      ...data,
      dataprops: "",
      Namastock: ''
    })
    setquantity('')
    data.dataprops.qty = data.dataprops.qty - quantity
  }




  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-sm-12 mt-2">
          <Dropdown
            optionsvalue={datawilayah}
            value={data.wilayah}
            onChange={(e) => onChange(e, 'wilayah')}
          />
        </div>
        <div className="col-md-3 col-sm-12 mt-2">
          <Dropdown
            optionsvalue={dataowner}
            value={data.owner}
            onChange={(e) => onChange(e, 'owner')}
          />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-3 col-sm-12 mt-2">
          <Button to={{
            pathname: "/review",
            datatable: data.datatable
          }}>
            <FaPrint /> &nbsp; &nbsp; Print Delivery Order
          </Button>
        </div>
        <div className="col-md-3 col-sm-12 mt-2">
          <ButtonVDiv onClick={btnAddDataTable}>
            <FaPlus /> Add Item's
          </ButtonVDiv>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        {/* <div className="col-md-5 col-sm-12">
          <DataInput
            datastock={datastock}
            value={data.Namastock}
            onChange={(e, { index }) => onChange(e, 'stock', index)}
            dataprops={data.dataprops}
            onChangeInput={onChange}
            quantity={quantity}
          />
        </div> */}

        <div className="col-md-2"
        // style={{ position: 'relative', justifyContent: 'flex-end', display: 'flex' }}
        >
          <Button to="/Stock/outstocks/history">History</Button>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-12 col-sm-12">
          <DataTable
            data={data.datatable}
          />
        </div>
      </div>

    </div>
  )
}

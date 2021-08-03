import React, { useState, useEffect, useContext } from 'react'
import { TableData } from './component/TableData'
import datatable from '../../../../datajson/stock.json'
import { Context } from '../../../../config/Context'

export const InStock = () => {
  const { apiwarehouse, loading, passing } = useContext(Context)
  const [dataInput, setDataInput] = useState({})
  const [qty, setQty] = useState(0)

  const getData = () => {
    apiwarehouse({ type: 'API_GET_LIST_INSTOCK' })
  }

  useEffect(() => {
    getData()

  }, [])


  const onChangeValueInput = (e, v) => {
    const value = e.target.value

    switch (v) {
      case "nama":
        setDataInput({ ...dataInput, nama_item: value })
        break;
      case "qty":
        setDataInput({ ...dataInput, qty: value.replace(/[^0-9]+/g, '') })
        break;
      case "qty2":
        setQty(value.replace(/[^0-9]+/g, ''))
        break;
      case "uom":
        setDataInput({ ...dataInput, vom: value })
        break;
      default:
        console.log('nothing add data')

    }

  }

  const btnAddMoreItem = () => {
    apiwarehouse({ type: 'API_POST_ADD_STOCK', data: dataInput })
  }

  const btnDelete = (id) => {
    apiwarehouse({ type: 'API_DELETE_STOCK', id: id })
  }

  const btnUpdate = (id, index, { data2, type }) => {
    // console.log(data2)
    // console.log('ini id : ', id)
    // console.log('ini index : ', passing[index])
    // console.log('ini ')


    let data

    if (type === 'modal') {
      data = {
        nama_item: data2.nama_item,
        qty: `${data2.qty}`,
        vom: data2.vom,
      }
    }
    else {
      function sum(obj) {
        var sum = 0;
        for (var el in obj) {
          if (obj.hasOwnProperty(el)) {
            sum += parseFloat(obj[el]);
          }
        }
        return sum;
      }
      var sample = { a: passing[index].qty, b: qty };
      var summed = sum(sample);

      data = {
        nama_item: passing[index].nama_item,
        qty: `${summed}`,
        vom: passing[index].vom,
      }
    }

    // console.log(data)

    apiwarehouse({ type: 'API_UPDATE_STOCK', id: id, data: data })
  }




  if (loading) {
    return 'Loading . . . '
  }

  return (
    <div className="container-fluid">
      {/* {JSON.stringify(qty)} */}
      {/* {JSON.stringify(passing)} */}
      {/* <small>
        catatan : api untuk update instock belum bisa &nbsp;&nbsp;&nbsp;
        prob : fetch method PATCH
      </small> */}
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <TableData
            data={passing ? passing : []}
            onChange={onChangeValueInput}
            value={dataInput}
            btnAdd={btnAddMoreItem}
            btnDelete={btnDelete}
            btnUpdate={btnUpdate}
            qty={qty}
          />
        </div>
      </div>

    </div>
  )
}

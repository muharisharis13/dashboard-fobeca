import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaTrash, FaPencilAlt } from 'react-icons/fa'
import Dropdown from '../../../../../component/dropdown/Dropdown'
import datauom from '../../../../../datajson/data_uom.json'
import datanamaitem from '../../../../../datajson/data_nama_item.json'

const Thead = styled.thead`
background: #000;
color:#fff;
text-align:center;
`

const Button = styled.span`
background: #000;
color:#fff;
font-weight:650;
padding:10px 10px;
cursor:pointer;
border-radius:5px;
align-items:center;
text-align:center;
justify-content:center;
`


export const TableData = ({ data2, data, setData }) => {
  const [input, setinput] = useState({
    name: '',
    qty: '',
    uom: ''
  })

  const options = datanamaitem

  const optionUOM = datauom



  const onChange = (e, type) => {
    if (type === 'name') {
      setinput({
        ...input, name: e
      })
    }
    else if (type === 'qty') {
      setinput({
        ...input, qty: e.target.value.replace(/[^0-9]+/g, '')
      })
    }
    else if (type === 'uom') {
      setinput({
        ...input, uom: e
      })
    }
  }



  const onClickOk = () => {
    data.push(input)
  }

  const btnEdit = value => {
    console.log(data[value])

    let props = data[value]

    setinput({
      ...input,
      name: props.name,
      qty: props.qty,
      uom: props.uom
    })
  }

  return (
    <table className="table table-bordered">
      {console.log(data)}
      <Thead>
        <tr>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Unit Of Measurement</th>
          <th>Action</th>
        </tr>
      </Thead>
      <tbody style={{ textAlign: 'center' }}>
        {
          data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>{item.uom}</td>
              <td>
                <div className="row">
                  <div className="col">
                    <Button onClick={() => btnEdit(index)} > <FaPencilAlt /> </Button>
                    <Button> <FaTrash /> </Button>
                  </div>
                </div>
              </td>
            </tr>
          ))
        }
        <tr>
          <td>
            <Dropdown
              optionsvalue={options}
              onChange={(e) => onChange(e, 'name')}
              value={input.name}
            />

          </td>
          <td> <input value={input.quantity} onChange={(e) => onChange(e, 'qty')} type="text" placeholder="Quantity" className="form-control" /> </td>
          <td>
            <Dropdown
              optionsvalue={optionUOM}
              onChange={(e) => onChange(e, 'uom')}
              value={input.uom}
            />

          </td>
          <td>
            <div className="row">
              <div className="col">
                <Button onClick={onClickOk} >Update</Button>

              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaTrash, FaPencilAlt, FaPlus } from 'react-icons/fa'
import Dropdown from '../../../../../component/dropdown/Dropdown'
import datauom from '../../../../../datajson/data_uom.json'
import datanamaitem from '../../../../../datajson/data_nama_item.json'
import { Select } from '../../../../../component/Select/Select'
import { Input } from '../../../../../component/element/input/Input'
import { ButtonVDiv } from '../../../../../component/element/button/Button'
import { Context } from '../../../../../config/Context'
import { ModalEdit } from '../../../../../component/modal/stock/ModalEdit'

const Thead = styled.thead`
background: #000;
color:#fff;
text-align:center;
`

const Button = styled.span`
background: #000;
color:#fff;
font-weight:650;
padding:5px 10px;
cursor:pointer;
border-radius:5px;
align-items:center;
text-align:center;
justify-content:center;
`

const TdWrapper = styled.div`
display: flex;
align-items: center;
text-align: center;
justify-content: space-around;
`


export const TableData = ({ data, onChange, value, btnAdd, btnDelete, btnUpdate, qty, }) => {
  const { loadingButton } = useContext(Context)
  const [show, setShow] = useState(false)
  const [index, setIndex] = useState(0)


  const showModal = (index) => {
    setShow(!show)
    setIndex(index)
  }

  return (
    <>
      <ModalEdit
        show={show}
        handleClose={() => setShow(!show)}
        data={data[index]}
        btnUpdate={btnUpdate}
      />
      <table className="table table-bordered">
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
            data.length > 0 ? data.map((item, index) => (
              <tr key={index}>
                <td>{item.nama_item}</td>
                <td>
                  <TdWrapper>
                    <Input width={70} id={index} type="text" placeholder="Qty" className="form-control"
                      value={index === 1 + index ? qty : null} onChange={(e) => onChange(e, 'qty2')}
                    />
                  &nbsp;<small>Of</small> &nbsp; {item.qty}
                  </TdWrapper>
                </td>
                <td>{item.vom}</td>
                <td>
                  <div className="row">
                    <div className="col">
                      <ButtonVDiv onClick={() => btnUpdate(item._id, index, { data2: {}, type: 'table' })}> Update </ButtonVDiv>
                    </div>
                    <div className="col">
                      <ButtonVDiv
                        onClick={() => showModal(index)}
                      >
                        <FaPencilAlt />
                      </ButtonVDiv>
                    </div>
                    <div className="col">
                      <ButtonVDiv onClick={() => btnDelete(item._id)} > <FaTrash /> </ButtonVDiv>
                    </div>
                  </div>
                </td>
              </tr>
            ))
              : null
          }
          <tr>
            <td>
              <Input type="text" placeholder="Item Name" className="form-control"
                value={value.nama_item} onChange={(e) => onChange(e, 'nama')}
              />
            </td>
            <td>
              <Input type="text" placeholder="Quantity" className="form-control"
                value={value.qty} onChange={(e) => onChange(e, 'qty')}
              />
            </td>
            <td>
              <Input type="text" placeholder="UoM" className="form-control"
                value={value.vom} onChange={(e) => onChange(e, 'uom')}
              />
            </td>
            <td>
              <div className="row">
                <div className="col">
                  <ButtonVDiv onClick={btnAdd}>
                    {loadingButton ? 'Loading' : <><FaPlus /> &nbsp; Add More Item</>}
                  </ButtonVDiv>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

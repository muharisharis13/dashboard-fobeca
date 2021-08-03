import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { FaCloudUploadAlt, FaTimes } from 'react-icons/fa'
import { ButtonVDiv } from '../../element/button/Button'
import { Input } from '../../element/input/Input'

export const ModalEdit = ({ show, handleClose, data, btnUpdate }) => {
  const [dataInput, setDataInput] = useState({
    nama_item: '',
    qty: '',
    vom: ''
  })

  useEffect(() => {
    setDataInput({
      ...dataInput,
      nama_item: data && data.nama_item,
      qty: data && data.qty,
      vom: data && data.vom,
    })
  }, [data])

  const onChangeValue = (e, v) => {
    const value = e.target.value

    switch (v) {
      case "nama":
        setDataInput({ ...dataInput, nama_item: value })
        break;
      case "qty":
        setDataInput({ ...dataInput, qty: value.replace(/[^0-9]+/g, '') })
        break;
      case "uom":
        setDataInput({ ...dataInput, vom: value })
        break;
      default:
        console.log('nothing add data')

    }
  }

  const btnSimpan = () => {
    // console.log(dataInput)
    const id = data && data._id
    btnUpdate(id, '', { data2: dataInput, type: 'modal' })
  }

  return (
    <Modal show={show} onHide={handleClose}>
      {/* {JSON.stringify(data)} */}
      <div className="container">
        <div className="row mt-2">
          <div className="col-md-11 col-sm-11">
            <h4>Edit Stock</h4>
          </div>
          <div className="col-md-1 col-sm-1">
            <FaTimes cursor="pointer" onClick={handleClose} />
          </div>
        </div>
        <div className="container-fluid">
          <div className="row mt-2">
            <div className="col-md-12 col-sm-12">
              Item Nama
            </div>
            <div className="col-md-12 col-sm-12">
              <Input type="text" className="form-control"
                placeholder="Item Name"

                value={dataInput.nama_item}
                onChange={(e) => onChangeValue(e, 'nama')}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12 col-sm-12">
              Qty
            </div>
            <div className="col-md-12 col-sm-12">
              <Input type="text" className="form-control" disabled
                placeholder="Quantity"

                value={dataInput.qty}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12 col-sm-12">
              Unit Of Measurement
            </div>
            <div className="col-md-12 col-sm-12">
              <Input type="text" className="form-control"
                placeholder="UoM"

                value={dataInput.vom}
                onChange={(e) => onChangeValue(e, 'uom')}
              />
            </div>
          </div>

        </div>
        <div className="row mt-3 pb-5">
          <div className="col-md-3">
            <ButtonVDiv onClick={btnSimpan}>
              Simpan Data
            </ButtonVDiv>
          </div>
        </div>
      </div>
    </Modal>
  )
}

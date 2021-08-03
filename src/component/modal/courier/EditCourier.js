import React, { useState, useEffect, useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { FaCloudUploadAlt, FaTimes } from 'react-icons/fa'
import { ButtonVDiv } from '../../element/button/Button'
import moment from 'moment'
import styled from 'styled-components'
import { Context } from '../../../config/Context'


const Input = styled.input`
height:100%;

&:focus {
  box-shadow:none;
  border : 0.1px solid grey;
}
`

const Td = styled.td`
padding:5px;
display:flex;
align-items:center;
`

export const EditCourier = ({ show, handleClose, data }) => {
  const { photo, identity, apiwarehouse } = useContext(Context)
  const [dataprops, setDataprops] = useState({
    date: '',
    full_name: '',
    email: '',
    phone_number: ''
  })

  useEffect(() => {
    setDataprops({
      date: data.date,
      full_name: data.full_name,
      email: data.courier_info && data.courier_info.email,
      phone_number: data.courier_info && data.courier_info.phone_number,
    })
  }, [data])

  const onChangeValue = function ({ e, v }) {

    switch (v) {
      case 'full_name':
        setDataprops({ ...dataprops, full_name: e.target.value })
        break;
      case 'email':
        setDataprops({ ...dataprops, email: e.target.value })
        break;
      case 'phone_number':
        setDataprops({ ...dataprops, phone_number: e.target.value })
        break;

      default:
        alert('Error Input')
        break;
    }
  }

  const btnUpdateCourier = function () {

    const data2 = {
      full_name: dataprops.full_name,
      email: dataprops.email,
      phone_number: dataprops.phone_number,
      identity: data.courier_info.identity_card,
      photo: data.courier_info.photo
    }

    apiwarehouse({ type: 'API_POST_UPDATE_COURIER', data: data2, id: data._id })
  }


  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Body style={{ padding: '40px 10px' }}>
        <div className="container-fluid">
          <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="col-md-10 col-sm-10">
              <h3>Edit Courier</h3>
            </div>
            <div className="col-md-2 col-sm-2">
              <FaTimes size={20} onClick={handleClose} cursor="pointer" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-5 col-sm-12">
              <img src={photo && window.URL.createObjectURL(photo)} alt="profil" width={300} />
            </div>
            <div className="col-md-7 col-sm-12">
              <table style={{ width: '100%' }}>
                <tr>
                  <th>Date Joined</th>
                  <Td> {moment(dataprops.date).format('ddd, DD MMM YYYY')} </Td>
                </tr>
                <tr>
                  <th>Full Name</th>
                  <Td> <Input value={dataprops.full_name} type="text" placeholder="Full Name" className="form-control" onChange={(e) => onChangeValue({ e: e, v: 'full_name' })} /> </Td>
                </tr>
                <tr>
                  <th>Email Address</th>
                  <Td> <Input value={dataprops.email} type="email" placeholder="Email Address" className="form-control" onChange={(e) => onChangeValue({ e: e, v: 'email' })} /> </Td>
                </tr>
                <tr>
                  <th>Phone Number</th>
                  <Td> <Input value={dataprops.phone_number} type="text" placeholder="Phone Number" className="form-control" onChange={(e) => onChangeValue({ e: e, v: 'phone_number' })} /> </Td>
                </tr>
              </table>

              <div className="col-md-7 mt-4">
                <img src={identity && window.URL.createObjectURL(identity)} alt="ktp" width={327} />
              </div>
            </div>
          </div>

          <div className="row mt-5 " >
            <div className="col-md-12 col-sm-12 justify-content-center align-items-center" style={{ display: 'flex' }}>
              <div className="col-md-5">
                <ButtonVDiv onClick={btnUpdateCourier}>
                  Edit Courier
                </ButtonVDiv>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

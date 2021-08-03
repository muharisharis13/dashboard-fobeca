import React, { useState, useEffect, useContext } from 'react'
import { Modal } from 'react-bootstrap'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
import { Context } from '../../../config/Context'
import { ButtonVDiv } from '../../element/button/Button'


export const EditPurchasing = ({ show, data, handleClose }) => {
  const { identity, photo, apiwarehouse } = useContext(Context)
  const [dataprops, setDataprops] = useState({
    fullname: '',
    email: '',
    phone: ''
  })

  useEffect(() => {
    setDataprops({
      ...dataprops,
      fullname: data.full_name,
      email: data.courier_info && data.courier_info.email,
      phone: data.courier_info && data.courier_info.phone_number
    })
  }, [data])

  const onChangeValue = ({ e, v }) => {

    switch (v) {
      case 'fullname':
        setDataprops({ ...dataprops, fullname: e.target.value })
        break;
      case 'email':
        setDataprops({ ...dataprops, email: e.target.value })
        break;
      case 'phone':
        setDataprops({ ...dataprops, phone: e.target.value.replace(/[^0-9]+/g, '') })
        break;

      default:
        break;
    }
  }


  const btnUpdatePurchasing = () => {
    // const formData = new FormData()

    // formData.append('full_name', dataprops.fullname)
    // formData.append('email', dataprops.email)
    // formData.append('phone_number', dataprops.phone)
    // formData.append('identity', identity)
    // formData.append('photo', photo)

    const data2 = {
      full_name: dataprops.fullname,
      email: dataprops.email,
      phone_number: dataprops.phone,
      idendity: data.courier_info.identity_card,
      photo: data.courier_info.photo,
    }



    apiwarehouse({ type: 'API_POST_UPDATE_PURCHASING_WO_IMAGE', data: data2, id: data._id })
  }

  // console.log(data)
  return (
    <Modal size="lg" show={show} onHide={handleClose}>

      <Modal.Header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10">
              <h3>Edit Purchasing</h3>
            </div>
            <FaTime className="col-md-2">
              <FaTimes onClick={handleClose} cursor="pointer" />
            </FaTime>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <label htmlFor="fullname"><b>Full Name</b></label>
              <Input type="text" id="fullname" className="form-control" placeholder="Full Name..."
                value={dataprops.fullname} onChange={(e) => onChangeValue({ e: e, v: 'fullname' })}
              />
            </div>
            <div className="col-md-8 mt-1">
              <label htmlFor="email"><b>Email Address</b></label>
              <Input type="email" id="email" className="form-control" placeholder="Email Address..."
                value={dataprops.email} onChange={(e) => onChangeValue({ e: e, v: 'email' })}
              />
            </div>
            <div className="col-md-8 mt-1">
              <label htmlFor="phone"><b>Phone Number</b></label>
              <Input type="text" id="phone" className="form-control" placeholder="Phone Number..."
                value={dataprops.phone} onChange={(e) => onChangeValue({ e: e, v: 'phone' })}
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <img
                src={photo && window.URL.createObjectURL(photo)}
                alt="photo" width={350} />
            </div>
            <div className="col-md-6">
              <img
                src={identity && window.URL.createObjectURL(identity)}
                alt="ktp" width={350} />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <ButtonVDiv onClick={btnUpdatePurchasing}>
                Update Data Purchasing
              </ButtonVDiv>
            </div>
          </div>

        </div>
      </Modal.Footer>
    </Modal>
  )
}


const FaTime = styled.div`
display: flex;
right:0;
position:relative;
align-items: center;
justify-content: center;

`

const Input = styled.input`
height:50%;

&:focus {
  box-shadow:none;
  border : 0.1px solid grey;
}
`
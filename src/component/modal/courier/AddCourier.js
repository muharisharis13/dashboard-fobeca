import React, { useContext, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { FaCloudUploadAlt, FaTimes } from 'react-icons/fa'
import { ButtonVDiv, ButtonLabel } from '../../element/button/Button'
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
const InputImage = styled.input`
display:none;
`

export const AddCourier = ({ show, handleClose }) => {
  const { apiwarehouse, loading } = useContext(Context)
  const [data, setData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
  })
  const [identity, setIdentity] = useState('')
  const [photo, setPhoto] = useState(null)
  const [dataPhoto, setdataPhoto] = useState(null)
  const [dataIdentity, setdataIdentity] = useState(null)
  const reader = new FileReader();


  const handleChangeData = (e, v) => {
    const value = e.target.value

    if (v === "full_name") {
      setData({
        ...data, full_name: value
      })
    }
    else if (v === "email") {
      setData({
        ...data, email: value
      })
    }
    else if (v === "phone_number") {
      setData({
        ...data, phone_number: value.replace(/[^0-9]+/g, '')
      })
    }
  }

  const hanleChangeImage = (e, v) => {


    reader.onload = () => {
      if (reader.readyState === 2) {
        if (v === 'identity') {
          setIdentity(reader.result)
        }
        else if (v === 'photo') {
          setPhoto(reader.result)
        }

      }
    }
    reader.readAsDataURL(e.target.files[0])
    if (v === 'identity') {
      setdataIdentity(e.target.files[0])

    }
    else if (v === 'photo') {
      setdataPhoto(e.target.files[0])

    }

  }

  const btnAddCourier = () => {
    const formData = new FormData()
    formData.append('full_name', data.full_name)
    formData.append('email', data.email)
    formData.append('phone_number', data.phone_number)
    formData.append('identity', dataIdentity)
    formData.append('photo', dataPhoto)

    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }

    apiwarehouse({ type: 'API_POST_ADD_COURIER', data: formData })


  }

  // console.log(photo)

  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Body style={{ padding: '40px 0px' }}>
        <div className="container-fluid">
          <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="col-md-10 col-sm-10">
              <h3>Add New Courier</h3>
            </div>
            <div className="col-md-2 col-sm-2">
              <FaTimes size={20} onClick={handleClose} cursor="pointer" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4 col-sm-12">
              <img src={photo} alt="photo" width={250} />
              <InputImage className="form-control" type="file" id="photo" accept="image/*" onChange={(e) => hanleChangeImage(e, 'photo')} />
              <ButtonLabel for="photo" className="mt-3">
                <FaCloudUploadAlt size={25} /> &nbsp; Upload Photo
              </ButtonLabel>
            </div>
            <div className="col-md-8 col-sm-12">
              <table style={{ width: '100%' }}>

                <tr>
                  <th>Full Name</th>
                  <Td> <Input type="text" placeholder="Full Name" className="form-control"
                    value={data.full_name} onChange={(e) => handleChangeData(e, "full_name")}
                  /> </Td>
                </tr>
                <tr>
                  <th>Email Address</th>
                  <Td> <Input type="email" placeholder="Email Address" className="form-control"
                    value={data.email} onChange={(e) => handleChangeData(e, "email")}
                  /> </Td>
                </tr>
                <tr>
                  <th>Phone Number</th>
                  <Td> <Input type="text" placeholder="Phone Number" className="form-control"
                    value={data.phone_number} onChange={(e) => handleChangeData(e, "phone_number")}
                  /> </Td>
                </tr>
              </table>

              <div className="col-md-6 mt-4">
                <img src={identity} alt="identity" width={450} />
                <InputImage className="form-control" type="file" id="identity" accept="image/*" onChange={(e) => hanleChangeImage(e, 'identity')} />
                <ButtonLabel for="identity" className="mt-3">
                  <FaCloudUploadAlt size={25} /> &nbsp; Upload Indentity Card
                </ButtonLabel>
              </div>
            </div>
          </div>

          <div className="row mt-5 " >
            <div className="col-md-12 col-sm-12 justify-content-center align-items-center" style={{ display: 'flex' }}>
              <div className="col-md-5">
                {
                  dataPhoto && dataIdentity &&
                  <ButtonVDiv onClick={btnAddCourier}>
                    {
                      loading ? 'Loading . . .' :
                        'Add Courier'
                    }
                  </ButtonVDiv>
                }
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

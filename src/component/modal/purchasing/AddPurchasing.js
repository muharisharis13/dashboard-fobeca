import React, { useContext, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { FaCloudUploadAlt, FaPlug, FaPlus, FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
import { Context } from '../../../config/Context'
import { ButtonLabel, ButtonVDiv } from '../../element/button/Button'



export const AddPurchasing = ({ handleClose, show }) => {
  const { apiwarehouse, loadingButton } = useContext(Context)
  const [data, setData] = useState({
    fullname: '',
    email: '',
    phone: ''
  })
  const [dataImage, setDataImage] = useState({
    dataPhoto: '',
    dataktp: '',
  })
  const [photo, setPhoto] = useState('')
  const [ktp, setKtp] = useState('')

  const onChangeValue = ({ e, v }) => {


    switch (v) {
      case 'fullname':
        setData({ ...data, fullname: e.target.value })
        break;
      case 'email':
        setData({ ...data, email: e.target.value })
        break;
      case 'phone':
        setData({ ...data, phone: e.target.value.replace(/[^0-9]+/g, '') })
        break;


      default:
        alert('error input')
        break;
    }
  }

  const onChangeValueImage = ({ e, v }) => {
    const reader = new FileReader()

    reader.onload = () => {
      if (reader.readyState === 2) {
        if (v === 'ktp') {
          setKtp(reader.result)
        }
        else if (v === 'photo') {
          setPhoto(reader.result)
        }

      }
    }
    reader.readAsDataURL(e.target.files[0])

    if (v === 'ktp') {
      setDataImage({ ...dataImage, dataktp: e.target.files[0] })
    }
    else if (v === 'photo') {
      setDataImage({ ...dataImage, dataPhoto: e.target.files[0] })
    }

  }

  const btnAddPurchasing = () => {
    // const data2 = {
    //   photo: dataImage.dataPhoto,
    //   identity: dataImage.dataktp,
    //   full_name: data.fullname,
    //   email: data.email,
    //   phone_number: data.phone
    // }

    const formData = new FormData()
    formData.append('full_name', data.fullname)
    formData.append('email', data.email)
    formData.append('phone_number', data.phone)
    formData.append('identity', dataImage.dataktp)
    formData.append('photo', dataImage.dataPhoto)

    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }
    apiwarehouse({ type: 'API_POST_ADD_PURCHASING', data: formData })
  }

  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10">
              <h3>Add New Purchasing</h3>
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
                value={data.fullname} onChange={(e) => onChangeValue({ e: e, v: 'fullname' })}
              />
            </div>
            <div className="col-md-8 mt-1">
              <label htmlFor="email"><b>Email Address</b></label>
              <Input type="email" id="email" className="form-control" placeholder="Email Address..."
                value={data.email} onChange={(e) => onChangeValue({ e: e, v: 'email' })}
              />
            </div>
            <div className="col-md-8 mt-1">
              <label htmlFor="phone"><b>Phone Number</b></label>
              <Input type="text" id="phone" className="form-control" placeholder="Phone Number..."
                value={data.phone} onChange={(e) => onChangeValue({ e: e, v: 'phone' })}
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <img
                src={photo}
                alt="photo" width={350} />
              <InputImage className="form-control" type="file" id="photo" accept="image/*"
                onChange={(e) => onChangeValueImage({ e: e, v: 'photo' })}

              />
              <ButtonLabel for="photo" className="mt-3">
                <FaCloudUploadAlt size={25} /> &nbsp; Upload Photo
              </ButtonLabel>
            </div>
            <div className="col-md-6">
              <img
                src={ktp}
                alt="ktp" width={350} />
              <InputImage className="form-control" type="file" id="ktp" accept="image/*"
                onChange={(e) => onChangeValueImage({ e: e, v: 'ktp' })}

              />
              <ButtonLabel for="ktp" className="mt-3">
                <FaCloudUploadAlt size={25} /> &nbsp; Upload Identity
              </ButtonLabel>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="container-fluid">
          <div class="row justify-content-center">
            <div class="col-md-4">
              {
                loadingButton ? 'Loading . . .' :
                  <ButtonVDiv onClick={btnAddPurchasing}>
                    <FaPlus /> &nbsp; Add Purchasing
                  </ButtonVDiv>
              }
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

const InputImage = styled.input`
display:none;
`
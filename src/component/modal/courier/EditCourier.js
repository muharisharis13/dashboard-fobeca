import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { FaCloudUploadAlt, FaTimes } from 'react-icons/fa'
import { ButtonVDiv } from '../../element/button/Button'
import moment from 'moment'
import styled from 'styled-components'


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
              <img src={data.profil} alt="profil" width={300} />
              {/* <ButtonVDiv>
                  <FaCloudUploadAlt size={25} /> &nbsp; Upload Foto
                </ButtonVDiv> */}
            </div>
            <div className="col-md-7 col-sm-12">
              <table style={{ width: '100%' }}>
                <tr>
                  <th>Date Joined</th>
                  <Td> {moment(data.date_join).format('DD-MM-YYYY-LTS')} </Td>
                </tr>
                <tr>
                  <th>Full Name</th>
                  <Td> <Input value={data.name} type="text" placeholder="Full Name" className="form-control" /> </Td>
                </tr>
                <tr>
                  <th>Email Address</th>
                  <Td> <Input value={data.email} type="email" placeholder="Email Address" className="form-control" /> </Td>
                </tr>
                <tr>
                  <th>Phone Number</th>
                  <Td> <Input value={data.phone_number} type="text" placeholder="Phone Number" className="form-control" /> </Td>
                </tr>
              </table>

              <div className="col-md-7 mt-4">
                <img src={data.identity} alt="ktp" width={327} />
                {/* <ButtonVDiv>
                    <FaCloudUploadAlt size={25} /> &nbsp; Upload Indentity Card
                  </ButtonVDiv> */}
              </div>
            </div>
          </div>

          <div className="row mt-5 " >
            <div className="col-md-12 col-sm-12 justify-content-center align-items-center" style={{ display: 'flex' }}>
              <div className="col-md-5">
                <ButtonVDiv> Edit Courier </ButtonVDiv>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

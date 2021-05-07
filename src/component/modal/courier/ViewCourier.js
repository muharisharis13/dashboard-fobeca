import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { FaCloudUploadAlt, FaPen, FaTimes, FaTrash } from 'react-icons/fa'
import { ButtonVDiv } from '../../element/button/Button'
import moment from 'moment'
import styled from 'styled-components'
import { EditCourier } from './EditCourier'


const Button = styled.span`
background:#000;
color : #fff;
padding:5px 10px;
cursor:pointer;
border-radius:5px;
align-items:center;
text-align:center;
justify-content:center;
`

export const ViewCourier = ({ show, handleClose, data }) => {
  const [isopen, setisopen] = useState(false)
  const [dataprops, setdataprops] = useState({})

  const btnEdit = () => {
    handleClose()
    setisopen(!isopen)
    setdataprops(data)
  }

  return (
    <>
      <EditCourier
        show={isopen}
        handleClose={btnEdit}
        data={dataprops}
      />
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Body style={{ padding: '40px 10px' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h3>Courier - Details</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 col-sm-12">
                <img src={data.profil} alt="profil" width={300} />
              </div>
              <div className="col-md-7 col-sm-12">
                <table width="100%">
                  <tr>
                    <th>Date Joined</th>
                    <td> <label> {data.date_join} </label> </td>
                  </tr>
                  <tr>
                    <th>Full Name</th>
                    <td> <label> {data.name} </label> </td>
                  </tr>
                  <tr>
                    <th>Email Address</th>
                    <td> <label> {data.email} </label> </td>
                  </tr>
                  <tr>
                    <th>Phone Number</th>
                    <td> <label> {data.phone_number} </label> </td>
                  </tr>
                </table>
                <table width="100%">
                  <tr>
                    <td> <strong>Identity Card</strong> </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={data.identity} alt="ktp" width={327} />
                    </td>
                  </tr>
                </table>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-md-12 col-sm-12" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button onClick={btnEdit}>
                  <FaPen />
                </Button>
                <Button>
                  <FaTrash />
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

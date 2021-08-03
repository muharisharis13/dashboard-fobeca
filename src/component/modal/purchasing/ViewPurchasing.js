import React, { useEffect, useContext, useState } from 'react'
import { Modal } from 'react-bootstrap'
import styled from 'styled-components'
import { FaTimes, FaPen, FaTrash } from 'react-icons/fa'
import moment from 'moment'
import { Context } from '../../../config/Context'
import { EditPurchasing } from './EditPurchasing'

export const ViewPurchasing = ({ show, data, handleClose }) => {
  const { identity, photo, apiwarehouse } = useContext(Context)
  const [showEdit, setShowEdit] = useState(false)


  const handleModalEdit = () => {
    handleClose()
    setShowEdit(!showEdit)
  }

  useEffect(() => {
    if (data.courier_info) {
      apiwarehouse({ type: 'API_GET_VIEW_IMAGE_KTP', nama_file: data.courier_info && data.courier_info.identity_card })
      apiwarehouse({ type: 'API_GET_VIEW_IMAGE_PHOTO', nama_file: data.courier_info && data.courier_info.photo })

    }
  }, [data])

  const btnDelete = ({ id }) => {
    apiwarehouse({ type: 'API_POST_DELETE_PURCHASING', id: id })
  }

  console.log(data)
  return (
    <>
      <EditPurchasing
        show={showEdit}
        handleClose={handleModalEdit}
        data={data}
      />
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-10">
                <h3>View Purchasing</h3>
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
              <div className="col-md-6">
                <table style={{ width: '100%' }}>
                  <tr>
                    <th>Date Joined</th>
                    <td>: {moment(data.date).format('ddd, DD MMM YYYY')}</td>
                  </tr>
                  <tr>
                    <th>Full Name</th>
                    <td>: {data.full_name}</td>
                  </tr>
                  <tr>
                    <th>Email Address</th>
                    <td>: {data.courier_info && data.courier_info.email}</td>
                  </tr>
                  <tr>
                    <th>Phone Number</th>
                    <td>: {data.courier_info && data.courier_info.phone_number}</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <img src={identity && window.URL.createObjectURL(identity)} alt={data.courier_info && data.courier_info.identity_card} width={350} />
              </div>
              <div className="col-md-6">
                <img src={photo && window.URL.createObjectURL(photo)} alt={data.courier_info && data.courier_info.photo} width={350} />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <Button
                onClick={handleModalEdit}
              >
                <FaPen />
              </Button>
              <Button>
                <FaTrash
                  onClick={() => btnDelete({ id: data._id })}
                />
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const FaTime = styled.div`
display: flex;
right:0;
position:relative;
align-items: center;
justify-content: center;

`

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
const Input = styled.input`
height:50%;

&:focus {
  box-shadow:none;
  border : 0.1px solid grey;
}
`
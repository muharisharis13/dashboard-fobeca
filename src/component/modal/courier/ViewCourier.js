import React, { useState, useEffect, useContext } from 'react'
import { Modal } from 'react-bootstrap'
import { FaCloudUploadAlt, FaPen, FaTimes, FaTrash } from 'react-icons/fa'
import { ButtonVDiv } from '../../element/button/Button'
import moment from 'moment'
import styled from 'styled-components'
import { EditCourier } from './EditCourier'
import { Context } from '../../../config/Context'


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
  const { apiwarehouse, identity, photo, loadingButton } = useContext(Context)

  const btnEdit = () => {
    handleClose()
    setisopen(!isopen)
    setdataprops(data)
  }

  useEffect(() => {
    // console.log(data.courier_info && data.courier_info.identity_card)
    if (data.courier_info) {
      apiwarehouse({ type: 'API_GET_VIEW_IMAGE_KTP', nama_file: data.courier_info && data.courier_info.identity_card })
      apiwarehouse({ type: 'API_GET_VIEW_IMAGE_PHOTO', nama_file: data.courier_info && data.courier_info.photo })

    }
  }, [data])

  // console.log('ini identity : ', identity)

  const btnDelete = ({ id }) => {
    apiwarehouse({ type: 'API_DELETE_COURIER', id: id })
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
                {/* <img src={data.courier_info ? data.courier_info.photo : ''} alt="profil" width={300} /> */}

                <img width={300} src={photo && window.URL.createObjectURL(photo)} alt={data.courier_info && data.courier_info.photo} />
              </div>
              <div className="col-md-7 col-sm-12">
                <table width="100%">
                  <tr>
                    <th>Date Joined</th>
                    <td> <label> {moment(data.date).format('ddd, DD MMM YYYY')} </label> </td>
                  </tr>
                  <tr>
                    <th>Full Name</th>
                    <td> <label> {data.full_name} </label> </td>
                  </tr>
                  <tr>
                    <th>Email Address</th>
                    <td> <label> {data.courier_info ? data.courier_info.email : null} </label> </td>
                  </tr>
                  <tr>
                    <th>Phone Number</th>
                    <td> <label> {data.courier_info ? data.courier_info.phone_number : null} </label> </td>
                  </tr>
                </table>
                <table width="100%">
                  <tr>
                    <td> <strong>Identity Card</strong> </td>
                  </tr>
                  <tr>
                    <td>
                      <img width={327} src={identity && window.URL.createObjectURL(identity)} alt={data.courier_info && data.courier_info.identity_card} />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            {
              loadingButton ? 'Loading. . . ' :
                <div className="row mt-4">
                  <div className="col-md-12 col-sm-12" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button onClick={btnEdit}>
                      <FaPen />
                    </Button>
                    <Button>
                      <FaTrash onClick={() => btnDelete({ id: data._id })} />
                    </Button>
                  </div>
                </div>
            }
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

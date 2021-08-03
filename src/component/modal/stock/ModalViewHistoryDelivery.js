import React, { useState, useEffect, useContext } from 'react'
import { Modal } from 'react-bootstrap'
import { FaCloudUploadAlt, FaTimes } from 'react-icons/fa'
import { Context } from '../../../config/Context'
import { ButtonVDiv } from '../../element/button/Button'
import { Input } from '../../element/input/Input'
import { Tbody, Thead } from '../../element/table/table'


export const ModalViewHistoryDelivery = ({ show, handleClose, data }) => {
  const { loadingModal } = useContext(Context)



  return (
    <Modal size="lg" show={show} onHide={handleClose}>

      <div className="container">
        <div className="row mt-2">
          <div className="col-md-11 col-sm-11">
            <h4>Detail Stock</h4>
          </div>
          <div className="col-md-1 col-sm-1">
            <FaTimes cursor="pointer" onClick={handleClose} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            {
              loadingModal ? 'Loading . . . ' :
                <table className="table table-bordered">
                  <Thead primary>
                    <tr>
                      <th>Item Delivered</th>
                      <th>Quantity</th>
                      <th>UoM</th>

                    </tr>
                  </Thead>
                  <Tbody>
                    {
                      data ?
                        data.map((item, index) => (
                          <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.qty}</td>
                            <td>{item.uom}</td>
                          </tr>
                        ))
                        : 'nothing data'
                    }
                  </Tbody>
                </table>
            }
          </div>
        </div>
      </div>
    </Modal>
  )
}
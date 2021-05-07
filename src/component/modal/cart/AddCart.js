import moment from 'moment'
import React from 'react'
import { Modal } from 'react-bootstrap'
import { Input } from '../../element/input/Input'
import { Td } from '../../element/table/table'
import { Maps } from '../../maps/setPosition/Maps'
import { ButtonVDiv } from '../../element/button/Button'
import { FaCloudUploadAlt } from 'react-icons/fa'

export const AddCart = ({ show, handleClose }) => {
  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Body style={{ padding: '40px 10px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>Add New Cart</h4>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-sm-12">
              <table width="100%">
                <tr>
                  <th>Cart Keeper</th>
                  <Td>
                    <Input type="text" className="form-control" />
                  </Td>
                </tr>
                <tr>
                  <th>Email Address</th>
                  <Td>
                    <Input type="text" className="form-control" />
                  </Td>
                </tr>
                <tr>
                  <th>Phone Number</th>
                  <Td>
                    <Input type="text" className="form-control" />
                  </Td>
                </tr>
              </table>

              <table className="mt-5">
                <tr>
                  <td> <ButtonVDiv> <FaCloudUploadAlt /> &nbsp; Upload Photo</ButtonVDiv> </td>
                </tr>
                <tr>
                  <td className="pt-4"> <ButtonVDiv><FaCloudUploadAlt /> &nbsp; Upload Identity Card</ButtonVDiv> </td>
                </tr>
              </table>
            </div>
            <div className="col-md-6 col-sm-12">
              <table width="100%">
                <tr>
                  <th>Date Joined</th>
                  <Td>
                    <label > {moment(new Date()).format('YYYY-MMM-DD')} </label>
                  </Td>
                </tr>
                <tr>
                  <th>Cart Name</th>
                  <Td>
                    <Input type="text" className="form-control" />
                  </Td>
                </tr>
                <tr>
                  <th> Address</th>
                  <Td>
                    <Input type="text" className="form-control" />
                  </Td>
                </tr>
              </table>

              <table width="100%" className="mt-4">
                <tr>
                  <th>
                    <h9>Add Google Maps Pin</h9>
                  </th>
                </tr>
                <tr>
                  <td>
                    <Maps />
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div className="row" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <div className="col-md-4 col-sm-12">
              <ButtonVDiv>
                Add Cart
              </ButtonVDiv>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

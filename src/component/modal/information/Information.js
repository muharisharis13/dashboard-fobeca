import React from 'react'
import { Modal } from 'react-bootstrap'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
import { ButtonVDiv } from '../../element/button/Button'

const Decs = styled.span`
font-weight:650;
text-align: center;
align-items: center;
justify-content: center;
display: flex;
`

export const Information = ({ show, handleClose, setStatus, id }) => {
  return (
    <Modal size="sm" show={show} onHide={handleClose}>
      <Modal.Header>
        <FaTimes cursor="pointer" onClick={handleClose} />
      </Modal.Header>
      <Modal.Body>
        <Decs>
          Are You Sure ?
        </Decs>
      </Modal.Body>
      <Modal.Footer>
        <div style={{ width: '100px' }}>
          <ButtonVDiv onClick={() => setStatus(id)}>
            Yes
          </ButtonVDiv>
        </div>
        <div>
          <div className="btn" onClick={handleClose}>
            Close
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

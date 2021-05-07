import React from 'react'
import { Card, Accordion, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { Button } from '../../../../component/element/button/Button'


const AccrodionToggle = styled(Accordion.Toggle)`
background:#000 !important;
color:#ffff;
font-weight:650;
cursor:pointer;
`


export const AccordionComponent = ({ }) => {
  return (
    <Accordion defaultActiveKey="0" >
      <Card>
        <AccrodionToggle as={Card.Header} eventKey="0">
          nama
        </AccrodionToggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Row>
              <Col md={12}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laboriosam adipisci similique libero id officia doloribus vero vel aperiam explicabo.

            </Col>
              <Col md={5} className="mt-3">
                <Button>
                  Proced Request
              </Button>
              </Col>
            </Row>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

    </Accordion>
  )
}

import React from 'react'
import { AccordionComponent } from './component/Accordion'

export const StockRequest = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h2>Stock Request</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-12">
          <AccordionComponent />
        </div>
      </div>
    </div>
  )
}

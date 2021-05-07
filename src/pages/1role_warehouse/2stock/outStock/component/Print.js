import React from 'react'
import { jsPDF } from "jspdf";
import { Button, ButtonVDiv } from '../../../../../component/element/button/Button'
import "jspdf/dist/polyfills.es.js";
import Logo from '../../../../../images/logo.png'
import moment from 'moment'
import { Tbody, Thead } from '../../../../../component/element/table/table'

export const Print = (props) => {
  const data = props.location.datatable




  const btnPrint = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
    });

    const elementHTML = document.querySelector('#print');
    doc.setFont('sans-serif', '', 'bold')
    doc.html(elementHTML, {
      callback: function (doc) {
        doc.save('Order_Delivery.pdf');
      }
    }, 10, 10);



  }


  return (
    <div className="container">
      <div id="print" className="container">
        <div className="row">
          <div className="col-md-1" > <img src={Logo} alt="logo" width={50} /> </div>
          <div className="col-md-10 pt-4"> <h2>Delivery Order</h2>  </div>
        </div>

        <div className='row mt-5'>
          <div className="col-md-6" >
            <label>
              {
                moment(new Date()).format('dddd, DD MMM YYYY --- LT')
              }
            </label>
          </div>
        </div>

        <div className="row mt-5">
          <div>
            <table>
              <tr>
                <th>To </th>
                <td>: Fobeca</td>
              </tr>
              <tr>
                <th>Courier &nbsp; </th>
                <td>: Sarjiman</td>
              </tr>
            </table>
          </div>
        </div>


        <div className="row mt-5">
          <div className="col-md-6">
            <table className="table">
              <Thead>
                <tr>
                  <th>No.</th>
                  <th>Item(s) Name</th>
                  <th>Qty</th>
                  <th>UoM</th>
                </tr>
              </Thead>
              <Tbody>
                {
                  data !== undefined ? data.map((item, index) => (
                    <tr key={index}>
                      <td> {index + 1} </td>
                      <td> {item.name} </td>
                      <td> {item.qty} </td>
                      <td> {item.uom} </td>
                    </tr>
                  ))
                    : null
                }
              </Tbody>
            </table>
          </div>
        </div>

        <div className="row mt-5">
          <div >
            Head Of Warehouse
            </div>
          <div style={{ marginTop: "50px" }}>
            ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )
            </div>
        </div>

      </div>

      <div className="row mt-5">
        <div className="col-md-2">
          <ButtonVDiv onClick={btnPrint}  >Print</ButtonVDiv>
        </div>
        <div className="col-md-2">
          <Button to="/Stock/outstock" primary>Close</Button>
        </div>

      </div>
    </div>
  )
}

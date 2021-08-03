import React, { useContext, useEffect } from 'react'
import { jsPDF } from "jspdf";
import { Button, ButtonVDiv } from '../../../../../component/element/button/Button'
import "jspdf/dist/polyfills.es.js";
import Logo from '../../../../../images/logo.png'
import moment from 'moment'
import { Tbody, Thead } from '../../../../../component/element/table/table'
import styled from 'styled-components'
import { Context } from '../../../../../config/Context';
import { Redirect } from 'react-router-dom'

const Title = styled.h2`
font-weight: 600;
`

export const Print = (props) => {
  const data = props.location.datatable
  const courier = props.location.courier
  const outlet = props.location.outlet
  const { apiwarehouse, loading } = useContext(Context)




  const btnPrint = async () => {
    const doc = new jsPDF('p', 'pt', 'a4');

    const elementHTML = document.querySelector('#print');
    doc.setFont('sans-serif', '', 'bold')
    doc.html(elementHTML, {

      padding: [100, 60, 40, 100],
      callback: function (doc) {
        doc.save('Order_Delivery.pdf');
      }
    }, 25, 50)



  }

  const btnSave = async () => {
    const data2 = {
      carts_id: outlet.value,
      carts_name: outlet.label,
      couries_id: courier.value,
      item_order: JSON.stringify(data)
    }
    // console.log('ini dia data yang di kirim : ', data2)
    await apiwarehouse({ type: 'API_POST_OUTSTOCK', data: data2 })
    await btnPrint()
  }

  if (courier === undefined || outlet === undefined) {
    return <Redirect to="/Stock/outstock" />
  }

  return (
    <div className="container">
      {
        JSON.stringify(outlet)
      }
      <div id="print" className="container">
        <div className="row mt-4">
          <div className="col-md-1" > <img src={Logo} alt="logo" width={50} /> </div>
          <div className="col-md-10 pt-4"> <Title>Delivery Order</Title>  </div>
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
                <td>: {outlet.label}</td>
              </tr>
              <tr>
                <th>Courier &nbsp; </th>
                <td>: {courier.label}</td>
              </tr>
            </table>
          </div>
        </div>


        <div className="row mt-5">
          <div className="col-md-7">
            <table className="table" style={{ width: '95%' }}>
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

        <div className="row mt-5 pl-4">
          <div className="col-md-2" style={{ textAlign: 'center' }}>
            Head Of Warehouse
            <div style={{ marginTop: "50px" }}>
              ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )
            </div>
          </div>
          <div className="col-md-2" style={{ textAlign: 'center' }}>
            Courier
          <div style={{ marginTop: "50px" }}>
            ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )
            </div>
          </div>
          <div className="col-md-2" style={{ textAlign: 'center' }}>
            Outlet
            <div style={{ marginTop: "50px" }}>
              ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )
            </div>
          </div>
        </div>

      </div>

      <div className="row mt-5">
        <div className="col-md-2">
          <ButtonVDiv onClick={btnSave}>
            {loading ? 'Loading . . .' : 'Print'}
          </ButtonVDiv>
        </div>
        <div className="col-md-2">
          <Button to="/Stock/outstock" primary>Close</Button>
        </div>

      </div>
    </div>
  )
}

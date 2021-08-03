import React, { useState } from 'react'
import { Button, ButtonVDiv } from '../../../../component/element/button/Button'
import { Thead, Tbody } from '../../../../component/element/table/table'
import moment from 'moment'

export const TableData = ({ data }) => {


  return (
    <div>
      {/* {console.log(data)} */}
      <table className="table">
        <Thead>
          <tr>
            <th>Date Joined</th>
            <th>Full Name</th>
            <th>Cart Info</th>
            <th>Action</th>
          </tr>
        </Thead>
        <Tbody>
          {
            data.map((item, index) => (
              <tr key={index}>
                <td>{moment(new Date()).format('YYYY - MMM - DD')}</td>
                <td>{item.outlet_name}</td>
                <td style={{ textAlign: 'left' }}>
                  <div className="row">
                    <div className="col-md-3" > <strong>City</strong> </div>
                    <div className="col-md-auto" style={{ justifyContent: 'flex-start', display: 'flex', alignItems: 'center' }}> : {item.address.city} </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3" > <strong>Post Code</strong> </div>
                    <div className="col-md-auto" style={{ justifyContent: 'flex-start', display: 'flex', alignItems: 'center' }}> : {item.address.postcode} </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3" > <strong>Provinsi</strong> </div>
                    <div className="col-md-auto" style={{ justifyContent: 'flex-start', display: 'flex', alignItems: 'center' }}> : {item.address.province} </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3" > <strong>Address</strong> </div>
                    <div className="col-md-auto" style={{ justifyContent: 'flex-start', display: 'flex', alignItems: 'center' }}> : {item.address.street_name} </div>
                  </div>
                </td>
                <td>
                  <Button to={{
                    pathname: "/Carts/Details",
                    data: data[index]
                  }}>
                    See Details
                  </Button>
                </td>
              </tr>
            ))
          }
        </Tbody>
      </table>
    </div>
  )
}

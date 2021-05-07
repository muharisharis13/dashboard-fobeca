import React, { useState } from 'react'
import { Button, ButtonVDiv } from '../../../../component/element/button/Button'
import { Thead, Tbody } from '../../../../component/element/table/table'

export const TableData = ({ data }) => {


  return (
    <div>

      <table className="table">
        <Thead>
          <tr>
            <th>Date Joined</th>
            <th>Full Name</th>
            <th>Courier Info</th>
            <th>Action</th>
          </tr>
        </Thead>
        <Tbody>
          {
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.date_join}</td>
                <td>{item.name}</td>
                <td style={{ textAlign: 'left' }}>
                  <div className="row">
                    <div className="col-md-3" > <strong>Email</strong> </div>
                    <div className="col-md-auto" style={{ justifyContent: 'flex-start', display: 'flex', alignItems: 'center' }}> : {item.email} </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3" > <strong>Phone Number</strong> </div>
                    <div className="col-md-auto" style={{ justifyContent: 'flex-start', display: 'flex', alignItems: 'center' }}> : {item.phone_number} </div>
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

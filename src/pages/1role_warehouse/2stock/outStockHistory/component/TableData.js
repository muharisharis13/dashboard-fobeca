import React from 'react'
import { Tbody, Thead } from '../../../../../component/element/table/table'
import moment from 'moment'

export const TableData = ({ data }) => {
  return (
    <table className="table table-bordered">
      <Thead primary>
        <tr>
          <th>No</th>
          <th style={{ width: '20%' }}>Date / Time</th>
          <th>Outlet ID</th>
          <th>Informasi</th>
        </tr>
      </Thead>
      <Tbody>
        {
          data.map((item, index) => (
            <tr key={index}>
              <td> {index + 1} </td>
              <td> {moment(item.creation_date).format('YYYY - MMM - DD')} </td>
              <td> {item.outlet_id} </td>
              <td>
                {
                  item.replenishments.map((item, index) => (
                    <div className="container">
                      <div key={index} className="row" style={{ padding: '10px 0px', borderBottom: '0.1px solid #E6E6E6', display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                        <div className="col-sm-3">
                          Qty Before
                        </div>
                        <div className="col-sm-8">
                          : {item.quantity_before}
                        </div>
                        <div className="col-sm-3">
                          Qty After
                        </div>
                        <div className="col-sm-8">
                          : {item.quantity_after}
                        </div>
                        <div className="col-sm-3">
                          Name
                        </div>
                        <div className="col-sm-8">
                          : {item.ingredient_id.name}
                        </div>
                        <div className="col-sm-3">
                          UoM
                        </div>
                        <div className="col-sm-8">
                          : {item.ingredient_id.unit_of_measurement}
                        </div>
                        <div className="col-sm-3">
                          Stock In
                        </div>
                        <div className="col-sm-8">
                          : {item.stock_in}
                        </div>
                      </div>
                    </div>

                  ))
                }
                {/* {
                  item.replenishments.map((item, index) => (
                    <table className="table table-borderless" style={{ textAlign: 'left' }}>
                      <tr key={index}>
                        <th>Qty Before</th>
                        <td>: {item.quantity_before} </td>
                      </tr>
                      <tr >
                        <th>Qty After</th>
                        <td>: {item.quantity_after} </td>
                      </tr>
                      <tr >
                        <th>Name</th>
                        <td>: {item.ingredient_id.name} </td>
                      </tr>
                      <tr >
                        <th>UoM</th>
                        <td>: {item.ingredient_id.unit_of_measurement} </td>
                      </tr>
                      <tr >
                        <th>Stock In</th>
                        <td>: {item.stock_in} </td>
                      </tr>
                    </table>
                  ))
                } */}
              </td>
            </tr>
          ))
        }
      </Tbody>
    </table>
  )
}

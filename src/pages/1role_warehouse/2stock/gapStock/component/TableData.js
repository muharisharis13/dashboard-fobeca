import React from 'react'
import { Tbody, Thead } from '../../../../../component/element/table/table'
import styled from 'styled-components'


const Gap = styled.div`
color: ${({ gap }) => (gap !== 0 ? 'red' : 'black')}
`

export const TableData = ({ data }) => {
  return (
    <table className="table">
      <Thead>
        <tr>
          <th>No</th>
          <th>Outlet ID</th>
          <th>Informasi Item(s)</th>
          {/* <th>Actual Stock</th>
          <th>Remaining Stock</th>
          <th>Gap</th>
          <th>UoM</th> */}
        </tr>
      </Thead>
      <Tbody>
        {
          data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td> {item.outlet_id} </td>
              <td>
                {
                  item.adjustments.map((item, index) => (
                    <div className="container">
                      <div key={index} className="row" style={{ padding: '10px 0px', borderBottom: '0.1px solid #E6E6E6', display: 'flex', alignItems: 'center', textAlign: 'left' }}>
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
                          Actual Stock
                        </div>
                        <div className="col-sm-8">
                          : {item.quantity_before}
                        </div>
                        <div className="col-sm-3">
                          Remaining Stock
                        </div>
                        <div className="col-sm-8">
                          : {item.quantity_after}
                        </div>
                        <div className="col-sm-3">
                          Gap
                        </div>
                        <Gap gap={item.quantity_before - item.quantity_after} className="col-sm-8">
                          : {item.quantity_before - item.quantity_after}
                        </Gap>
                      </div>
                    </div>
                  ))
                }
              </td>
              {/* <td>{item.actual_stock}</td>
              <td>{item.remaining_stock}</td>
              <td>{item.actual_stock - item.remaining_stock}</td>
              <td>{item.uom}</td> */}
            </tr>
          ))
        }
      </Tbody>
    </table>
  )
}

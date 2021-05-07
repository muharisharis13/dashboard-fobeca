import React from 'react'
import { Tbody, Thead } from '../../../../../component/element/table/table'

export const DataTable = ({ data }) => {
  return (
    <table className="table table-bordered">
      <Thead primary>
        <tr>
          <th>No.</th>
          <th>Item(s) Name</th>
          <th>Qty</th>
          <th>Uom</th>
        </tr>
      </Thead>
      <Tbody>
        {
          data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>{item.uom}</td>
            </tr>
          ))
        }
      </Tbody>
    </table>
  )
}

import React from 'react'
import styled from 'styled-components'

const Thead = styled.thead`
text-align:center;
`
const Tbody = styled.tbody`
text-align:center;
`

export const TableData = ({ data }) => {
  return (
    <table className="table">
      <Thead>
        <tr>
          <th>No. </th>
          <th>Item(s) Name</th>
          <th>Current Stock</th>
          <th>Uom</th>
        </tr>
      </Thead>
      <Tbody >
        {
          data.map((item, index) => (
            <tr key={index}>
              <td> {index + 1} </td>
              <td> {item.name} </td>
              <td> {item.qty} </td>
              <td> {item.uom} </td>
            </tr>
          ))
        }
      </Tbody>
    </table>
  )
}

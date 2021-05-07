import React from 'react'
import { Thead, Tbody } from '../../../../../component/element/table/table'
import Dropdown from '../../../../../component/dropdown/Dropdown2'
import styled from 'styled-components'

const Td = styled.td`
display: flex;
 justify-content: center;
  align-items: center 
`

export const DataInput = ({ datastock, value, onChange, dataprops, onChangeInput, quantity }) => {
  return (
    <table className="table">
      <Thead>
        <tr>
          <th>Items(s) Name</th>
          <th>Qty</th>
          <th>Uom</th>
        </tr>
      </Thead>
      <Tbody>
        <tr>
          <td>

            <Dropdown
              optionsvalue={datastock.map(item => item.name)}
              value={value}
              onChange={onChange}
            />
          </td>
          <Td>
            <input placeholder="Qty" type="'text'" className="form-control"
              value={quantity}
              onChange={(e) => onChangeInput(e, 'inputqty')}
            /> /
            {dataprops.qty}
          </Td>
          <td>
            {dataprops.uom}
          </td>
        </tr>
      </Tbody>
    </table>
  )
}

import React from 'react'
import { Input } from '../../../../../component/element/input/Input'
import { Tbody, Thead } from '../../../../../component/element/table/table'
import { Select } from '../../../../../component/Select/Select'

export const DataTable = ({ data, options, selectedOptions, setSelectedOptions, propsInput,
  qty, onChangeQty, setQty
}) => {
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
        <tr>
          <td>
            -
          </td>
          <td>
            <Select
              propsOptions={options}
              selectedOption={selectedOptions}
              setSelectedOptions={setSelectedOptions}
            />
          </td>
          <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            {
              selectedOptions ?
                <>
                  <Input width={50} type="text" className="form-control"
                    value={qty > propsInput.qty ? setQty(propsInput.qty) : qty} onChange={onChangeQty}
                  /> &nbsp; / {propsInput.qty}
                </>
                : 'Nothing'
            }
          </td>
          <td>
            {propsInput.vom}
          </td>
        </tr>
      </Tbody>
    </table>
  )
}

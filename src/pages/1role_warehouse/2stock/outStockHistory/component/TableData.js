import React from 'react'
import { Tbody, Thead } from '../../../../../component/element/table/table'
import moment from 'moment'

export const TableData = ({ data }) => {
  return (
    <>
      {
        data.map((item, index) => (
          <>
            <div className="row" key={index}>
              <div className="col-md-3 col-sm-3">
                {moment(item.creation_date).format('ddd, DD MMM YYYY')}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <table className="table table-bordered">
                  <Thead primary>
                    <tr>
                      <th>Item Name</th>
                      <th>Qty Before</th>
                      <th>Qty After</th>
                      <th>Stock In</th>
                      <th>UoM</th>
                    </tr>
                  </Thead>
                  <Tbody>
                    {
                      item.replenishments.map((item, index) => (
                        <tr key={index}>
                          <td>
                            {item.ingredient_id.name}
                          </td>
                          <td>
                            {item.quantity_before}
                          </td>
                          <td>
                            {item.quantity_after}
                          </td>
                          <td>
                            {item.stock_in}
                          </td>
                          <td>
                            {item.ingredient_id.unit_of_measurement}
                          </td>
                        </tr>
                      ))
                    }
                  </Tbody>
                </table>

              </div>
            </div>
          </>

        ))
      }
    </>
  )
}

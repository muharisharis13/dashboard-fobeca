import React from 'react'
import { Tbody, Thead } from '../../../../../component/element/table/table'
import styled from 'styled-components'
import moment from 'moment'


const Gap = styled.div`
color: ${({ gap }) => (gap !== 0 ? 'red' : 'black')};
font-weight: 600;
`

export const TableData = ({ data, selectedOutlet }) => {
  // console.log('ini data : ', selectedOutlet)
  return (
    <>
      <div className="row pb-4">
        <div className="col-md-12 col-sm-12">
          <table>
            {/* <tr>
              <th>Outlet ID</th>
              <td>: {data.length > 0 ? data[0].outlet_id : null}</td>
            </tr> */}
            <tr>
              <th>Outlet Name &nbsp;</th>
              <td>: {selectedOutlet.label}</td>
            </tr>
          </table>
        </div>
      </div>
      {
        data !== [] ? data.map((item, index) => (
          <div className="row" key={index} style={{ display: 'flex', flexDirection: 'row', textAlign: 'center' }}>
            <div className="col-md-3 col-sm-3 pt-5">
              <strong>
                {moment(item.creation_date).format('DD MMM YYYY')}
              </strong>
            </div>
            <div className="col-md-12 col-sm-12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>UoM</th>
                    <th>Actual Stock</th>
                    <th>Remaining Stock</th>
                    <th>Gap</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    item.adjustments ? item.adjustments.map((item, index) => (
                      <tr key={index}>
                        <td>{item.ingredient_id.name}</td>
                        <td>{item.ingredient_id.unit_of_measurement}</td>
                        <td>{item.quantity_before}</td>
                        <td>{item.quantity_after}</td>
                        <td>
                          <Gap gap={item.quantity_before - item.quantity_after} className="col-sm-8">
                            {item.quantity_before - item.quantity_after}
                          </Gap>
                        </td>
                      </tr>
                    ))
                      : null
                  }
                </tbody>
              </table>
            </div>
          </div>

        ))
          : 'nothing Data'
      }

    </>
  )
}

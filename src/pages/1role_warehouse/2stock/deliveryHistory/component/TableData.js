import React, { useContext, useState, useEffect } from 'react'
import { Tbody, Thead } from '../../../../../component/element/table/table'
import moment from 'moment'
import { ButtonLink } from '../../../../../component/element/button/Button'
import { Context } from '../../../../../config/Context'
import { ModalViewHistoryDelivery } from '../../../../../component/modal/stock/ModalViewHistoryDelivery'
import { Information } from '../../../../../component/modal/information/Information'

export const TableData = ({ data }) => {
  const { apiwarehouse } = useContext(Context)
  const [show, setShow] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const [id, setid] = useState(null)
  const [index, setIndex] = useState(0)

  const btnChangeStatus = async (id) => {

    await apiwarehouse({ type: 'API_POST_DELIVERY_STATUS', id: id, status: { status: true } })
  }



  const btnhandleShow = (id) => {
    setShow(!show)
    setIndex(id)
  }

  const btnHandleShowInfo = (index) => {
    setShowInfo(!showInfo)
    setid(index)
  }




  // console.log('ini data : ', data)
  return (
    <>
      <ModalViewHistoryDelivery
        show={show}
        handleClose={btnhandleShow}
        data={data[index] ? data[index].item_order : []}
      />
      <Information
        show={showInfo}
        handleClose={btnHandleShowInfo}
        setStatus={btnChangeStatus}
        id={data[id] ? data[id]._id : ''}
      />
      <table className="table table-bordered">
        <Thead primary>
          <tr>
            <th>Date</th>
            <th>Courier</th>
            <th>Item Delivered</th>
            <th>Outlet</th>
            <th>Delivery Status</th>
          </tr>
        </Thead>
        <Tbody>
          {
            data.length > 0 ? data.sort((a, b) => a.date < b.date ? 1 : -1).map((item, index) => (
              <tr key={index}>
                <td>{moment(item.date).format('DD MMM YYYY h:mm')}</td>
                <td>{item.couries_id && item.couries_id[0].full_name}</td>
                <td>
                  <ButtonLink onClick={() => btnhandleShow(index)}>
                    See Here
                  </ButtonLink>
                </td>
                <td>{item.carts_name}</td>
                <td>
                  {item.status ? 'Finished' : 'On going'} <br />
                  {item.status ? null :
                    <ButtonLink
                      // onClick={() => btnChangeStatus(item._id)}
                      onClick={() => btnHandleShowInfo(index)}
                    >
                      <small>Click here to change status</small>
                    </ButtonLink>}
                </td>
              </tr>
            ))
              : null
          }
        </Tbody>
      </table>
    </>
  )
}

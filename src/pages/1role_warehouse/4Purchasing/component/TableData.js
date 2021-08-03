import React, { useState } from 'react'
import { ButtonVDiv } from '../../../../component/element/button/Button'
import { Thead, Tbody } from '../../../../component/element/table/table'
import { ViewCourier } from '../../../../component/modal/courier/ViewCourier'
import moment from 'moment'
import { ViewPurchasing } from '../../../../component/modal/purchasing/ViewPurchasing'
import $ from 'jquery'

export const TableData = ({ data }) => {
  const [dataprops, setdataprops] = useState({})
  const [isopen, setisopen] = useState(false)

  const btnHandleShow = () => setisopen(!isopen)

  const btnSeeDetails = (index) => {
    setdataprops(data[index])
    btnHandleShow()
  }

  const PrintLaporan = () => {
    let restorepage = document.body.innerHTML;
    let printcontent = document.getElementById('purchasing').outerHTML;

    document.body.outerHTML = printcontent;
    window.print();
    // 
    document.body.innerHTML = restorepage;

  }


  return (
    <div>
      <ViewPurchasing
        data={dataprops}
        handleClose={btnHandleShow}
        show={isopen}
      />
      {/* <button onClick={PrintLaporan}>print</button> */}
      <table className="table" id="purchasing">
        <Thead>
          <tr>
            <th>Date Joined</th>
            <th>Full Name</th>
            <th>Purchasing Info</th>
            <th id="btnAction">Action</th>
          </tr>
        </Thead>
        <Tbody>
          {
            data.map((item, index) => (
              <tr key={index}>
                <td>{moment(item.date).format('ddd , DD MMM YYYY')}</td>
                <td>{item.full_name}</td>
                <td style={{ textAlign: 'left' }}>
                  <div className="row">
                    <div className="col-md-3" > <strong>Email</strong> </div>
                    <div className="col-md-auto" style={{ justifyContent: 'flex-start', display: 'flex', alignItems: 'center' }}> : {item.courier_info && item.courier_info.email} </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3" > <strong>Phone Number</strong> </div>
                    <div className="col-md-auto" style={{ justifyContent: 'flex-start', display: 'flex', alignItems: 'center' }}> : {item.courier_info && item.courier_info.phone_number} </div>
                  </div>
                </td>
                <td id="btnAction1">
                  <ButtonVDiv onClick={() => btnSeeDetails(index)} >
                    See Details
                  </ButtonVDiv>
                </td>
              </tr>
            ))
          }
        </Tbody>
      </table>
    </div>
  )
}

import React, { useState } from 'react'
import Dropdown from '../../../component/dropdown/Dropdown2'
import dataWilayah from '../../../datajson/data_wilayah.json'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { Maps } from '../../../component/maps/Maps'
import moment from 'moment'


const ImgProfile = styled.img`
border-radius:7px;
`

export const DetailsCart = (props) => {
  const data = props.location.data;
  const [valueWilayah, setValueWilayah] = useState('')

  const onChangeValue = e => {
    setValueWilayah(e)
  }

  if (data === undefined) {
    return <Redirect to="/Cart" />
  }

  // console.log(props.location.data)
  return (
    <div className="container-fluid pb-5">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h3>Cart Details</h3>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-md-3 col-sm-3">
          <Dropdown
            optionsvalue={dataWilayah}
            onChange={onChangeValue}
            value={valueWilayah}
          />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12 col-sm-12">
          <h4>Cart Keeper</h4>
        </div>
        <div className="col-md-4 col-sm-4">
          <ImgProfile src={data.profil} width={350} alt="Profil" />
        </div>
        <div className="col-md-8 col-sm-8">
          <table>
            <tr>
              <th>Date Joined</th>
              <td>: {moment(data.creation_date).format('ddd , DD MMM YYYY')} </td>
            </tr>
            <tr>
              <th>Full Name</th>
              <td>: {data.outlet_name} </td>
            </tr>
            <tr>
              <th>Email Address</th>
              <td>: {data.email} </td>
            </tr>
            <tr>
              <th>Phone Number &nbsp;</th>
              <td>: {data.outlet_phone} </td>
            </tr>
          </table>
          <table className="mt-5">
            <tr>
              <td><h4>Identity Card</h4></td>
            </tr>
            <tr>
              <td>
                <img src={data.identity} alt="Ktp" width={350} />
              </td>
            </tr>
          </table>
        </div>
      </div>


      <div className="row mt-5">
        <div className="col-md-12 col-sm-12">
          <h4>Cart Details</h4>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 col-sm-12">
          <table>
            <tr>
              <th>Date Joined</th>
              <td>: {moment(data.creation_date).format('ddd , DD MMM YYYY')}</td>
            </tr>
            <tr>
              <th>Cart Name</th>
              <td>: {data.outlet_name}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>:{`${data.address && data.address.street_name} - ${data.address && data.address.city}, ${data.address && data.address.province}, ${data.address && data.address.country}, ${data.address ? data.address.postcode : '-'} `}</td>
            </tr>
          </table>
        </div>
        <div className="col-md-8 col-sm-12">
          <Maps
            lat={data.lat}
            lng={data.lng}
          />
        </div>

      </div>

    </div>
  )
}

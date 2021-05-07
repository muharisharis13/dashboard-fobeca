import React, { useState } from 'react'
import Dropdown from '../../../component/dropdown/Dropdown2'
import dataWilayah from '../../../datajson/data_wilayah.json'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { Maps } from '../../../component/maps/Maps'


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

  console.log(data)
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
              <td>: {data.date_join} </td>
            </tr>
            <tr>
              <th>Full Name</th>
              <td>: {data.name} </td>
            </tr>
            <tr>
              <th>Email Address</th>
              <td>: {data.email} </td>
            </tr>
            <tr>
              <th>Phone Number &nbsp;</th>
              <td>: {data.phone_number} </td>
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
              <td>: {data.date_join}</td>
            </tr>
            <tr>
              <th>Cart Name</th>
              <td>: {data.name}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>: {data.address}</td>
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

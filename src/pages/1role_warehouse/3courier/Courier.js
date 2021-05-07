import React, { useState } from 'react'
import datacourier from '../../../datajson/data_courier.json'
import { FaUser, FaPlus } from 'react-icons/fa'
import { ButtonVDiv } from '../../../component/element/button/Button'
import { FilterButton } from '../../../component/filter/FilterButton'
import { Search } from '../../../component/filter/Search'
import { TableData } from './component/TableData'
import { AddCourier } from '../../../component/modal/courier/AddCourier'

export const Courier = () => {
  const [isShow, setIsShow] = useState({
    addCourier: false
  })

  const handleAddCourier = () => setIsShow({ ...isShow, addCourier: !isShow.addCourier })

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <h3>Total Courier</h3>
        </div>
      </div>
      <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="col-md-2" style={{ fontSize: '3em' }}>
          <FaUser /> <span>{JSON.stringify(datacourier.length)} </span>
        </div>
        <div className="col-md-2">
          <ButtonVDiv onClick={handleAddCourier}> <FaPlus /> Add New Courier </ButtonVDiv>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-8 col-sm-12">
          <FilterButton />
        </div>
        <div className="col-md-4 col-sm-12">
          <Search />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12 col-sm-12">
          <TableData
            data={datacourier}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 col-sm-12">
          <AddCourier
            show={isShow.addCourier}
            handleClose={handleAddCourier}
          />
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { FaExchangeAlt, FaPlus } from 'react-icons/fa'
import { ButtonVDiv } from '../../../component/element/button/Button'
import { FilterButton } from '../../../component/filter/FilterButton'
import { Search } from '../../../component/filter/Search'
import datapurchasing from '../../../datajson/data_courier.json'
import { TableData } from './component/TableData'

export const Purchansing = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h2>Total Purchasing</h2>
        </div>
      </div>

      <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="col-md-2 col-sm-2" style={{ fontSize: '3em' }}>
          <FaExchangeAlt fontSize={35} /> <span>{JSON.stringify(datapurchasing.length)} </span>
        </div>

        <div className="col-md-2">
          <ButtonVDiv
          // onClick={handleAddCourier}
          > <FaPlus /> Add New Purchasing </ButtonVDiv>
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
            data={datapurchasing}
          />
        </div>
      </div>

    </div>
  )
}

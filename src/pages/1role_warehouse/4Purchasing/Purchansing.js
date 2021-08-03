import React, { useContext, useEffect, useState } from 'react'
import { FaExchangeAlt, FaPlus } from 'react-icons/fa'
import { ButtonVDiv } from '../../../component/element/button/Button'
import { FilterButton } from '../../../component/filter/FilterButton'
import { Search } from '../../../component/filter/Search'
import { AddPurchasing } from '../../../component/modal/purchasing/AddPurchasing'
import { Context } from '../../../config/Context'
// import datapurchasing from '../../../datajson/data_courier.json'
import { TableData } from './component/TableData'

export const Purchansing = () => {
  const { apiwarehouse, datapurchasing, dispatch, datapurchasingTemp } = useContext(Context)
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)


  useEffect(() => {
    apiwarehouse({ type: 'API_GET_PURCHASING' })
  }, [])


  const btnSearch = (e) => {
    if (e) {
      e.preventDefault()
    }

    const filtercourier = datapurchasingTemp && datapurchasingTemp.filter(item => {
      const query = search
      return (
        item.full_name.toLowerCase().indexOf(query) >= 0 || item.full_name.indexOf(query) >= 0
      )
    })

    dispatch({
      type: 'SET_PURCHASING',
      datapurchasing: filtercourier,
      datapurchasingTemp: datapurchasingTemp,
    })

  }

  useEffect((e) => {
    btnSearch(e)
  }, [search])
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

          <AddPurchasing
            show={showModal}
            handleClose={() => setShowModal(!showModal)}
          />
          <ButtonVDiv
            onClick={() => setShowModal(!showModal)}>
            <FaPlus /> Add New Purchasing
          </ButtonVDiv>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-8 col-sm-12">
          {/* <FilterButton /> */}
        </div>
        <div className="col-md-4 col-sm-12">
          <Search
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            btnSearch={btnSearch}
          />
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

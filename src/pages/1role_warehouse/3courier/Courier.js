import React, { useState, useEffect, useContext } from 'react'
import datacourier from '../../../datajson/data_courier.json'
import { FaUser, FaPlus } from 'react-icons/fa'
import { ButtonVDiv } from '../../../component/element/button/Button'
import { FilterButton } from '../../../component/filter/FilterButton'
import { Search } from '../../../component/filter/Search'
import { TableData } from './component/TableData'
import { AddCourier } from '../../../component/modal/courier/AddCourier'
import { Context } from '../../../config/Context'

export const Courier = () => {
  const [isShow, setIsShow] = useState({
    addCourier: false
  })
  const [search, setSearch] = useState('')
  const { dispatch, apiwarehouse, datacourier, datacourierTemp, loading } = useContext(Context)

  const handleAddCourier = () => setIsShow({ ...isShow, addCourier: !isShow.addCourier })

  useEffect(() => {
    apiwarehouse({ type: 'API_GET_COURIER2' })
  }, [])

  // console.log(datacourierTemp)


  const onChangeValue = (e) => {
    setSearch(e.target.value)
  }

  const btnSearch = (e) => {
    if (e) {
      e.preventDefault()
    }

    const filtercourier = datacourierTemp && datacourierTemp.filter(item => {
      const query = search
      return (
        item.full_name.toLowerCase().indexOf(query) >= 0 || item.full_name.indexOf(query) >= 0
      )
    })

    dispatch({
      type: 'SET_COURIER',
      datacourier: filtercourier,
      datacourierTemp: datacourierTemp,
    })

  }

  useEffect((e) => {
    btnSearch(e)
  }, [search])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <h3>Total Courier</h3>
        </div>
      </div>
      <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="col-md-2" style={{ fontSize: '3em' }}>
          <FaUser /> <span>{JSON.stringify(datacourier && datacourier.length)} </span>
        </div>
        <div className="col-md-2">
          <ButtonVDiv onClick={handleAddCourier}> <FaPlus /> Add New Courier </ButtonVDiv>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-8 col-sm-12">
          {/* <FilterButton /> */}
        </div>
        <div className="col-md-4 col-sm-12">
          <Search
            value={search}
            onChange={onChangeValue}
            btnSearch={btnSearch}

          />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12 col-sm-12">
          {
            loading ? 'Loading . . . ' :
          <TableData
                data={datacourier ? datacourier : []}
          />
          }
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

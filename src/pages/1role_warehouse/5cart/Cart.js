import React, { useState, useEffect } from 'react'
import { FaExchangeAlt, FaPlus } from 'react-icons/fa'
import { ButtonVDiv } from '../../../component/element/button/Button'
import { FilterButton } from '../../../component/filter/FilterButton'
import { Search } from '../../../component/filter/Search'
import datapurchasing from '../../../datajson/data_courier.json'
import { TableData } from './component/TableData'
import { AddCart } from '../../../component/modal/cart/AddCart'
import iconGerobak from '../../../images/gerobak.png'
import { MakeGet, RenewToken } from '../../../config/FunctionAPI'
import { cookiesRemove } from '../../../config/Cookies'

export const Cart = () => {
  const [isopen, setisopen] = useState(false)
  const [search, setSearch] = useState('')
  const [data, setData] = useState({
    result: [],
    resultTemp: [],
    loading: false
  })

  const btnAdd = () => setisopen(!isopen)

  const getData = async function () {
    setData({
      ...data,
      loading: !data.loading
    })

    MakeGet({
      url: `/outlet/all`
    })
      .then(res => {
        // console.log(res)
        if (res.status === 'OK') {
          setData({
            ...data,
            loading: !data.loading,
            result: res.outlets,
            resultTemp: res.outlets,
          })

        }
        else if (res.error) {
          alert(res.error)
          cookiesRemove({ key: 'token' })
          RenewToken()

        }
      })
  }

  useEffect(() => {
    getData()
  }, [])


  const btnSearch = (e) => {
    if (e) {
      e.preventDefault()
    }
    const filteruser = data.resultTemp.filter(item => {
      const query = search
      return (
        item.outlet_name.toLowerCase().indexOf(query) >= 0 ||
        item.outlet_name.indexOf(query) >= 0
      )


    })



    setData({ ...data, result: filteruser })
  }


  useEffect((e) => {
    btnSearch(e)
  }, [search])





  return (
    <div className="container-fluid">
      <AddCart
        handleClose={btnAdd}
        show={isopen}
      />
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h2>Total Carts</h2>
        </div>
      </div>

      <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="col-md-2 col-sm-2" style={{ fontSize: '3em', display: 'flex' }}>
          <img src={iconGerobak} width={100} alt="Icon" /> <span>{JSON.stringify(datapurchasing.length)} </span>
        </div>

        {/* <div className="col-md-2 col-sm-12">
          <ButtonVDiv
            onClick={btnAdd}
          > <FaPlus /> &nbsp; Add New Cart </ButtonVDiv>
        </div> */}
      </div>

      <div className="row mt-4">
        {/* <div className="col-md-8 col-sm-12">
          <FilterButton />
        </div> */}
        <div className="col-md-4 offset-md-8 col-sm-12 ">
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
            data={data.result}
          />
        </div>
      </div>

    </div>
  )
}

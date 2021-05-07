import React from 'react'
import DatePicker2 from 'react-datepicker'
import styled from 'styled-components'

import "react-datepicker/dist/react-datepicker.css";


const Date = styled(DatePicker2)`
cursor:pointer;
`


export const DatePicker = ({ selected, onChange }) => {
  return <Date
    selected={selected}
    onChange={onChange}
    dateFormat="yyyy-MMM-dd"
    className="form-control"
  />
}

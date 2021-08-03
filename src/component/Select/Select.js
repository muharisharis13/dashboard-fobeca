import React from 'react'
import Select1 from 'react-select';

export const Select = ({ propsOptions, selectedOption, setSelectedOptions, placeholder }) => {

  const options = propsOptions

  const handleChange = selected => {
    setSelectedOptions(selected)
  }

  return <Select1
    value={selectedOption}
    onChange={handleChange}
    options={options}
    placeholder={placeholder}
  />
}

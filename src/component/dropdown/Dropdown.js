import React, { useState } from "react";
import styled from "styled-components";
import { FaAngleDown, FaAngleUp, FaPlus } from 'react-icons/fa'



const DropDownContainer = styled("div")`
  width: 100%;
  text-align:center;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 10px;
  justify-content:space-between;
  position:relative;
`;

const DropDownHeader = styled("div")`
  /* margin-bottom: 0.8em; */
  padding: 0.4em 1em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1rem;
  color: #fff;
  background: #000;
  display:flex;
  align-items:center;
  justify-content:space-around;
`;

const DropDownListContainer = styled("div")`
transition:420ms;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  /* padding-left: 1em; */
  background: #ffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #000;
  font-size: 1rem;
  font-weight: 500;
  display:block;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  &:first-child {
    padding-top: 0.8em;
  }

  
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  
  transition:320ms;
&:hover{
    background:grey;
    color:#fff;
  }
`;

const Button = styled.div`
background:#000;
color:#fff;
padding:0px 10px;
display:flex;
align-items:center;
text-align:center;
justify-content:center;
`

const Input = styled.input`
border-radius:0px;
`



export default function App({ optionsvalue, value, onChange, onClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenInput, setOpenInput] = useState(false)
  const options = optionsvalue;

  const toggling = () => setIsOpen(!isOpen);

  const togglinginput = () => setOpenInput(!isOpenInput);

  const onOptionClicked = value => () => {
    onChange(value)
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {value || "Select"}
          {
            isOpen ?
              <FaAngleUp />
              :
              <FaAngleDown />
          }
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              <Button onClick={togglinginput}> <FaPlus />  Add New Item</Button>
              {
                isOpenInput && (
                  <div style={{ display: 'flex', padding: '10px' }}>
                    <Input type="text" className="form-control" style={{ boxShadow: 'none' }} />
                    <Button onClick={onClick}>Add</Button>
                  </div>

                )
              }
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </div>
  );
}
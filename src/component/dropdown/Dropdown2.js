import React, { useState } from "react";
import styled from "styled-components";
import { FaAngleDown, FaAngleUp, FaPlus } from 'react-icons/fa'



const DropDownContainer = styled("div")`
  width: ${({ width }) => (width === 'big' ? '70%' : width === 'small' ? '50%' : '100%')};
  text-align:center;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 10px;
  justify-content:center;
  align-items:center;
  display:inline-block;
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
  display:inline-flex;
  align-items:center;
  justify-content:space-around;
  /* border-radius:10px; */
  transition:450ms;

  &:hover {
    box-shadow: 0px 0px 13px 0px rgba(77,75,77,1);
  }
`;

const DropDownListContainer = styled("div")`
transition:420ms;
position:relative;
top:0;

`;

const DropDownList = styled("ul")`
  padding: 10px 10px;
  margin: 0;
  /* padding-left: 0em; */
  background: #ffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  color: #000;
  font-size: 1rem;
  font-weight: 500;
  display:inline-block;
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
  
  /* display:inline-flex; */
  
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



export default function App({ optionsvalue, value, onChange, width }) {
  const [isOpen, setIsOpen] = useState(false);
  const options = optionsvalue;

  const toggling = () => setIsOpen(!isOpen);


  const onOptionClicked = (value, index) => {
    onChange(value, { index });
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <DropDownContainer width={width}>
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
          <DropDownListContainer style={{ background: 'transparent', alignItems: 'center', textAlign: 'center' }}>
            <DropDownList>
              {options.map((option, index) => (
                <ListItem onClick={() => onOptionClicked(option, index)} key={Math.random()}>
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
import styled from 'styled-components'

export const Input = styled.input`
height:100%;
width: ${({ width }) => (`${width}%`)};

&:focus {
  box-shadow:none;
  border : 0.1px solid grey;
}
`
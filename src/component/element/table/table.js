import styled from 'styled-components'


export const Thead = styled.thead`
text-align : center;
background : ${({ primary }) => (primary ? '#000' : 'none')};
color : ${({ primary }) => (primary ? '#fff' : '#000')};
border: 0.1px solid grey;
`
export const Tbody = styled.thead`
text-align : center;
`

export const Td = styled.td`
padding:5px 0px;
`
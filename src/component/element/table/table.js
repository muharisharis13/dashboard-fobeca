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
export const Th = styled.th`
padding:0px;
`

export const Td = styled.td`
padding:0px 0px;
`
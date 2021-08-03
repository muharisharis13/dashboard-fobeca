import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
border-radius: 5px;
background:${({ primary }) => (primary ? 'grey' : '#010606')};
white-space : nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
color: ${({ dark }) => (dark ? '#010606' : '#fff')};
font-size : ${({ fontbig }) => (fontbig ? '20px' : '15px')};
outline : none;
border:none;
cursor : pointer;
display: flex;
justify-content : center;
align-items: center;
transition : all 0.2s ease-in-out;
height:40px;
font-weight:650;

&:hover {
  transition: all 0.2s ease-in-out;
  background : ${({ primary }) => (primary ? '#ffff' : 'grey')};
  text-decoration : none;
  background:${({ primary }) => (primary ? 'grey' : 'grey')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.42);
}

`

export const ButtonVDiv = styled.div`
border-radius: 5px;
background:${({ primary }) => (primary ? 'grey' : '#010606')};
white-space : nowrap;
padding: ${({ big }) => (big ? '14px 10px' : '7px 8px')};
color: ${({ dark }) => (dark ? '#010606' : '#fff')};
font-size : ${({ fontbig }) => (fontbig ? '20px' : '15px')};
outline : none;
border:none;
cursor : ${({ disabled }) => (disabled ? 'no-drop' : 'pointer')};
display: flex;
justify-content : center;
align-items: center;
transition : 650ms;
font-weight:500;


&:hover {
  background : ${({ primary }) => (primary ? '#ffff' : 'grey')};
  text-decoration : none;
  background:${({ primary }) => (primary ? 'green' : 'grey')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.4);
}

`

export const ButtonLabel = styled.label`
border-radius: 5px;
background:${({ primary }) => (primary ? 'grey' : '#010606')};
white-space : nowrap;
padding: ${({ big }) => (big ? '14px 10px' : '7px 8px')};
color: ${({ dark }) => (dark ? '#010606' : '#fff')};
font-size : ${({ fontbig }) => (fontbig ? '20px' : '15px')};
outline : none;
border:none;
cursor : pointer;
display: flex;
justify-content : center;
align-items: center;
transition : 650ms;
font-weight:500;


&:hover {
  background : ${({ primary }) => (primary ? '#ffff' : 'grey')};
  text-decoration : none;
  background:${({ primary }) => (primary ? 'green' : 'grey')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.4);
}

`

export const ButtonLink = styled(Link)`
text-decoration: underline;

`
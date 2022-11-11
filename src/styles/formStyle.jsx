import styled from "styled-components";


export const Input = styled.input`
  box-sizing: border-box;
  width: 250px;
  padding: 5px;
  font-size: 1rem;
  border: 2px solid #eee;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  border-radius: 10px;
  font-family: 'Mukta';

  @media(max-width: ${({ theme }) => theme.mobile}) {
      flex-direction: column;
   }
`

export const InputCreate = styled.input`
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 40px;
  align-items: center;
  background-color: #fff;
  color: #333;
  font-family: 'Mukta';

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
    background-color: #D8C4C0;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: ${({ theme }) => theme.mobile}) {
      flex-direction: column;
   }
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  line-height: 1.2;
  padding: 5px 10px;
  background: papayawhip;
  color: palevioletred;
`

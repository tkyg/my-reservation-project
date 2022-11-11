import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../index.css"

export const StyledLink = styled(NavLink)`
  width: 40%;
  text-decoration: none;
  color: #ccae68;
  background-color: #f7efe9;
  vertical-align: baseline;
  border-radius: 5px;
  font-family: "Aboreto";
  font-size: 17px;

  &:hover {
    opacity: 0.7;
    transform: scale(0.98);
    color: #80e8e3;
  }
`;

export const DivLink = styled.div`
  display: flex;
  margin: 0.1% 0.1% 0%;
  padding: 10px;
  width: 100%;
  text-align: center;
  align-items: center;
  color: #ccae68;
  background-color: #f7efe9;

  @media(max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`
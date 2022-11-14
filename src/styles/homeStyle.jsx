import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #fcfcfc;
  padding: 50px 0;
  color: #ccae68;
  text-align: center;
  border-radius: 0.5rem;

  h1 {
    font-size: 400%;
  }

  h5 {
    font-size: 15px;
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
      flex-direction: column;
  }
`
import styled from "styled-components";

export const Div = styled.div`
   display: flex;
   text-align: center;
   background-color: #f3f3f3;
   color: "#808080";
   border-radius: 15px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
   margin: 20px 0;
   padding: 20px;
   flex-direction: row-reverse;

   img {
      width: 300px;
      height: 200px;
      border-radius: 10px;
      object-fit: cover;
      padding: 5px;
      margin:.2rem;
   }

   & > div {
      flex: 1;
   }

   @media(max-width: ${({ theme }) => theme.mobile}) {
      flex-direction: column;
   }
`
export const Div1 = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 500px;
  max-height: 800px;
  margin: auto;
  padding: 40px;
  text-align: center;
  font-size: 16px;
`

export const Div2 = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 200px;
  max-height: 100px;
  border-radius: 10px;
  float: "right";
  margin: auto;
  padding: 10px;
  text-align: center;
  font-size: 16px;
`
export const Button = styled.button`
   border-radius: 10px;
   border:none;
   box-shadow: 0ch, 0, 20px rgba(0, 0, 0, 0.15);
   cursor: pointer;
   font-size: 12px;
   font-weight: 700;
   padding: 7px 20px;
   background-color: #f7f6f5;
   color: "#333";

   &:hover {
      opacity: 0.9;
      transform: scale(1.1);
   }
   `
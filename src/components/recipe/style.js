import styled from "styled-components";

export const SelectList = styled.select`
 
  ${'' /* margin-top: 1rem; */}
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.3rem;
  font-family: "Girassol", cursive;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${props=>props.textColor||"black"}
`;

export const RecipeCardContainer = styled.div`
position: relative;
left: 0;
top: 0;
display:flex;
flex-flow: column wrap;
justify-content:space-between;
align-items:center;
  width: 250px;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.2rem;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #E1F1DD;
  margin: 1rem;
  box-shadow: 3px 3px 5px 5px rgba(0, 0, 0, 0.8);
  transition: all 0.3s ease-in-out;

  :hover{
    box-shadow: none;
    top: 3px;
    left: 3px;
  }
  img{
      width: 120px;
      border-radius: 0.5rem;
  }
  a{
    display: table-cell;
    text-align: center;
    vertical-align: bottom;
    background-color: #00adb5;
    font-size:0.7rem;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    border-radius: 0.5rem
  }
`;

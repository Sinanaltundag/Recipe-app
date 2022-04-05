import styled from "styled-components";



export const NavBar = styled.div`
  background-color: ${(props) => props.backColor || "#E1F1DD"};
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
`;

import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.backColor || "#00adb5"};
  margin: auto;
  min-height: 95vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => props.alignItems || "center"};
  background-image: url(${(props) => props.imgUrl || undefined});
  ${"" /* background-attachment: fixed; */}
`;
export const Container = styled.div`
  background-color: ${(props) => props.backColor || "#00adb5"};
  margin: auto;
   padding:0.5rem;
  width:${(props) => props.ConWidth || "500px"};
  display: flex;
  flex-direction: ${(props) => props.flexDir || "column"};
 justify-content:center; 
  flex-wrap:${(props) => props.wrap && "wrap"};
  gap: 0.5rem;
  align-items: ${(props) => props.alignItems || "center"};
  border: 1px solid white;
  line-height: 1;
  border-radius: ${(props) => props.borderRadius || "0.5rem"};
  p {
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }
`;

export const Img = styled.img`
  margin: 2rem;
`;

export const NavLink = styled.span`
  font-style: ${(props) => props.fontStyle || undefined};
  color: #02475e;
  font-family: "Girassol", cursive;
  font-size: 1.5rem;
  padding: 0.5rem;
  text-decoration: none;
  font-weight: ${(props) => props.fontWeight || undefined};
  &:hover {
    font-weight: bold;
    color: #00adb5;
  }
  ${(props) =>
    props.text &&
    css`
      color: black;
      font-family: "Girassol", cursive;
      font-size: 2rem;
      padding: 0;
      font-weight: ${(props) => props.fontWeight || "bold"};
      background-color: rgba(100, 100, 100, 0.5);
    `}
`;

export const Span = styled.span`
  font-style: ${(props) => props.fontStyle || undefined};
  color: #00adb5;
  font-family: "Girassol", cursive;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem;
  text-decoration: none;
`;

export const FormInput = styled.input`
  background-color: ${(props) => props.backColor || "rgba(0, 0, 0,0.5)"};
  ${"" /* margin-top: 1rem; */}
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.3rem;
  font-family: "Girassol", cursive;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.textColor || "black"};
`;

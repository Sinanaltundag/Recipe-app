import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Img, NavLink, Wrapper } from "../GlobalStyledComp";
import MealSvg from "../../assets/diet.svg";

const Details = () => {
  const location = useLocation();
  const recipe = location.state.recipe;
  console.log(location.state)

  return (
    <Wrapper>
      <Container flexDir="row">
        <h1>{recipe.label}</h1>
        <Img src={MealSvg} width="150px" />
      </Container>
      <Container ConWidth={"95%"} backColor={"#E1F1DD"}>
      <Img src={recipe.image} maxWidth="300px"/>
        <NavLink>Nutrients</NavLink>
        <div className="nutrients">
          {Object.values(recipe.totalNutrients).map((value) => {
            return Object.values(value).map((item) => {
              return (
                <div>
                  <p>{item}</p>
                </div>
              );
            });
          })}
        </div>
        <NavLink>Ingredients</NavLink>
        <ol>
          {recipe.ingredients.map((ingredient, i) => {
            return (
              <li>
                <p> {ingredient.text}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </Wrapper>
  );
};

export default Details;

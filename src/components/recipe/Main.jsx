import axios from "axios";
import React, {  useState } from "react";
import { Container, Img, Wrapper } from "../GlobalStyledComp";
import { FormInput } from "../GlobalStyledComp";
import { SelectList } from "./style";
import MealSvg from "../../assets/home.svg"
import RecipeCard from "./RecipeCard";
const APP_KEY = "97bfb796b5ffd0ad8fa237f06c3221a4";
const APP_ID = "583486eb";

const Main = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState()
  const [mealType, setMealType] = useState("Breakfast")
 
 


    const fetchApi = async (query, mealType) => {
      const res = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`
      );
      setRecipes(res.data.hits);
    };
    // fetchApi("apple", "Lunch")

const handleSearch =()=> {
  query? fetchApi(query,mealType):alert("Please enter a search query");
  
} 
const handleChange =(value)=>{
  setQuery(value)
}

  return (
    <div>
      <Wrapper backColor={"#00adb5"}>
      <br />
      <h1>Food App</h1> <br />
        <Container flexDir={"row"} backColor={"#00adb5"}>
          <FormInput  backColor={"white"} onChange={(e)=>handleChange(e.target.value) }/>
          <FormInput  type="button" value="Search" backColor={"white"} onClick={handleSearch}/>
          <SelectList backColor={"white"} onChange={(e)=>setMealType( e.target.value)}>
            <option value="Breakfast">Breakfast</option>
            <option value="Dinner">Dinner</option>
            <option value="Lunch">Lunch</option>
            <option value="Snack">Snack</option>
            <option value="Teatime">Teatime</option>
          </SelectList>
        </Container>
        <div className="flex-container">
        {recipes?.length>0?recipes.map((recipe,index)=>{
          return (<RecipeCard {...recipe} key={index} width={"200px"}/>)}):<Img src={MealSvg} width="500px"/>}
        
        </div>
      </Wrapper>
    </div>
  );
};

export default Main;

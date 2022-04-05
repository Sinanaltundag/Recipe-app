import React from 'react'
import {  useNavigate } from 'react-router-dom'
import {  FormInput, Img } from '../GlobalStyledComp'
import { RecipeCardContainer } from './style'

const RecipeCard = ({recipe}) => {

  let navigate=useNavigate();
    const handleClick=()=>{
        navigate("/details",{state:{recipe}})
    }


  const {label, image}= recipe
  return (
    <RecipeCardContainer width={"200px"}>
<Img   src={image} width="120px" />
<p>{label}</p>
<FormInput type="button" value={"View More"} onClick={handleClick} />
    </RecipeCardContainer>
  )
}

export default RecipeCard
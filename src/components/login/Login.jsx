import React from 'react'
import { Container, Img,  Wrapper } from '../GlobalStyledComp'
import MealSvg from '../../assets/meal.svg' 

import Form from './Form'

const Login = () => {
  return (
    <div>

<Wrapper imgUrl={"https://source.unsplash.com/random/?cook"} >
  <Container backColor={"rgba(0,173,181,0.5)"} borderRadius={"50%"} style={{width: "500px", height: "500px"}}>
<Img src={MealSvg} alt="" width={"150px"}/>
<Form/>
  </Container>
</Wrapper>


    </div>
  )
}

export default Login
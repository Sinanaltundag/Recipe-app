import React from 'react'

import {Wrapper, Img,Container,NavLink} from "../GlobalStyledComp"
import Coding from "../../assets/coding.svg"

const About = () => {
  return (
    <div>
      <Wrapper backColor={"#00adb5"} >
        <Img src={Coding} alt="" width={"400px"}/>
        <h2>About Software Developer <NavLink>Sinan</NavLink> </h2>
        <Container backColor={"#00adb5"} alignItems={"end"}>
          <h3>Hi, I'am Sinan</h3>
          <p>I’m currently learning Full-Stack Development Languages.</p>
          <p>I know JS, ReactJS, SQL, Python, Golang, Bootstrap, Sass.</p>
          <h3><a href='mailto:peykani@gmail.com'>Send email</a> : peykani@gmail.com</h3>
        </Container>
      </Wrapper>
    </div>
  )
}

export default About
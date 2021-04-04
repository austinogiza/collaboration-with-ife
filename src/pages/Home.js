import React, {useState} from 'react'
import styled from 'styled-components'
import Right from '../components/Right'
import Sidebar from '../components/Sidebar'
import {motion} from 'framer-motion'

const Home = () => {

  const [clicked, setClicked]=useState(false)

  const onClicked =()=>{
    setClicked(!clicked)
  }
  return (
<>
<Body>
  <Sidebar toggle={clicked}/>
  <Right/>

  <Hamburger onClick={onClicked}>
    <Cover>
    <Toggle togg={clicked}/>
    <Bottom togg={clicked}/>
    </Cover>
  </Hamburger>
</Body>

</>
  )
}


const Body  = styled.div`
position: relative;
width: 100%;
height:100%;
display: grid;
grid-template-columns:330px auto;
grid-auto-rows: minmax(300px,auto);
@media only screen and (max-width: 800px){
  grid-template-columns:1fr;
}
`

const Hamburger = styled.div`
position: absolute;
top: 20px;
right: 16px;
width: 30px;
height: 20px;
display: none;
cursor: pointer;
z-index: 1000;
@media only screen and (max-width: 800px){
  display: block;
}
@media only screen and (max-width: 650px){
  top: 40px;
}
`

const Cover = styled.div`
display: flex;
flex-direction: column;
`
const Toggle = styled(motion.span)`
width: 100%;
height: 3px;
border-radius: 20px;
background: #000;
transition: 0.5s ease-in;
transform: ${props => props.togg ? "rotate(-45deg) translate(-2px,1px);": "rotate(0deg)"};
`
const Bottom = styled(motion.span)`
width: 100%;
height: 3px;
border-radius: 20px;
margin-top: 4px;
background: #000;
transition: 0.5s ease-in;
transform: ${props => props.togg ? "rotate(45deg) translate(-5px,-6px);": "rotate(0deg)"};

`

export default Home

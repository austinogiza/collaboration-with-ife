import React from 'react';
import styled,{ css } from 'styled-components';
import { Link } from 'react-router-dom';
// import {FaFigma, DiSwift} from 'react-icons/fa';
import design from '../images/design.svg'
import figma from '../images/figma.svg'
import swift from '../images/swift.svg'
import tutorials from '../images/tutorials.svg'
import downloads from '../images/downloads.svg'
import courses from '../images/course.svg'
import user from '../images/user.svg'
import book from '../images/book.svg'
import {motion} from 'framer-motion'

const Sidebar = ({toggle}) => {
  return (
    <Nav toggle={toggle}> 
      <Rect>
          <Link>
            <Icon circle><Img src={book}/></Icon>
          </Link> 
    
          <Link>
            <Icon circle><Img src={user}/></Icon>
         </Link> 
      </Rect>
      <Card>
        {renderHeaders()}
      </Card>
      <Card id='courses'>
        <header>Courses</header>
        {renderSection('Courses')}
      </Card>
      <Card id='tutorials'>
        <header>Tutorials</header>
        {renderSection('Tutorials')}
      </Card>
    </Nav>
  )
}


const Nav = styled(motion.nav)`
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items:flex-start;
  width:320px;
  background:#E3E8FF;
  padding: 5% 0;
min-height: 500px;
height: 100%;
transition: 0.5s ease-in;
@media only screen and (max-width: 800px){
  position: fixed;
  z-index: 999;
  transition: 0.5s ease-in;
  transform: ${props => props.toggle ? "translateX(0%)": "translateX(-200%)"};
 
}
`
const Card = styled.ul`
  width:95%;
  min-height: 150px;
  padding:2% 5%;
  display:flex;
  flex-direction:column;
  list-style:none;

  header {
    font-size:18px;
    font-weight:bold;
    margin:10px 5px;
  }

`
const Tile = styled.li`
margin:0;    
border-radius:10px;
position:relative;
width:294px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:flex-start; 
transition: 0.3s ease-in;

  a{
    padding:8px;
    font-style:normal;
    font-size:17px;
    font-weight:500;
    line-height:20px;
    border-radius:20px;
    text-decoration:none;
    color:black;
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-start; 
    transition: 0.3s ease-in;
  }

  a:hover{
    background:#00C6F2;
    transition: 0.3s ease-in;
  }

  ${props => props.justify && css`
  justify-content:${props.justify};
  `}
`
const Icon = styled.span`
margin:auto 5px;
width:36px;
height:36px;
border-radius:12px;
background:black;
color:black;
font-weight:bold;
display:flex;
justify-content:center;
align-items:center;
font-size:8px;
/* //filter:drop-shadow(0px 5px 10px); */

  ${props=>props.circle && css`
    height:44px;
    width:44px;
    border-radius:50%;
    background:white;
  `}

  ${props=>props.color === 'pink1' && css`
  filter:drop-shadow(0px 5px 10px rgba(255,111,171,0.3));
  background:linear-gradient(180deg, #E1467C 0%, #FF9CE3 100%);
  `}
  ${props=>props.color === 'blue1' && css`
  filter:drop-shadow(0px 5px 10px rgba(140,228,224,0.3));
  background:linear-gradient(180deg, #2F88FF 0%, #9EECD9 100%);
  `}
  ${props=>props.color === 'purple' && css`
  filter:drop-shadow(0px 5px 10px rgba(123,91,228,0.3));
  background:linear-gradient(200.44deg, #4316DB 13.57%, #9076E7 98.38%);
  `}
  ${props=>props.color === 'pink2' && css`
  filter:drop-shadow(0px 5px 10px rgba(255,111,171,0.3));
  background:linear-gradient(180deg, #FF5252 0%, #FF72B6 100%);
  `}
  ${props=>props.color === 'blue2' && css`
  filter:drop-shadow(0px 5px 10px rgba(134,174,255,0.3));
  background:linear-gradient(111.34deg, #844EFF 0.04%, #88F88F 100.04%);
  `}
  ${props=>props.color === 'cyan' && css`
  filter:drop-shadow(0px 5px 10px rgba(187,245,246,0.3));
  background:linear-gradient(180deg, #81D4FF 0%, #CDFFF3 100.04%);
  `}
  ${props=>props.color === 'orange' && css`
  filter:drop-shadow(0px 5px 10px rgba(255,111,171,0.3));
  background:linear-gradient(200.42deg, #FF8570 13.57%, #F9504A 98.35%);
  `}

  ${props=>props.color === 'blue3' && css`
  filter:drop-shadow(0px 5px 10px rgba(134,174,255,0.3));
  background:linear-gradient(218.31deg, #007AFF 0%, #50A4FF 100%);
  `}

  ${props=>props.color === 'black' && css`
  filter:drop-shadow(0px 5px 10px rgba(187,245,246,0.3));
  `}

  
`
const Rect = styled.div`
margin:20px auto;
max-width:300px;
height: 50px;
width:95%;
padding:5%;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;

a{
  text-decoration:none;
}
`
const navlist=[
  {header:'Courses',
    tiles:[
      {name:'UI Design for iOS 14',icon:'',color:'pink2',path:'', image: design},
      {name:'SwiftUI for iOS 14',icon:'',color:'blue2',path:'', image: swift},
      {name:'UI design for developers',icon:'',color:'cyan',path:'', image: design},
    ],
    color:'pink1',
    image: courses
  },
  {header:'Tutorials',
    tiles:[
      {name:'UI design',icon:'',color:'orange',path:'', image: design},
      {name:'SwiftUI',icon:'',color:'blue3',path:'',image: swift},
      {name:'Figma',icon:'',color:'black',path:'', image: figma},
    ],
    color:'blue1',
    image: tutorials
  },
  {header:'Downloads',
  color:'purple',
  image: downloads
  },
]
const renderHeaders = () =>{
    return navlist.map((item,index)=>{
      return(
        <Tile key={`${item.header}`}>
          <Link className='tile'>
            <Icon color={item.color}><Img src={item.image}/></Icon>
            {item.header}
          </Link>
        </Tile>
      )
    })
}

const renderSection = (section) =>{
  const list = navlist.filter(item=>item.header === section)[0];
  return list['tiles'].map((item,index)=>{
    return (
      <Tile key={`${section}Tile${index}`}>
        <Link className='tile'>
          <Icon color={item.color}><Img src={item.image}/></Icon>
          {item.name}
        </Link>
      </Tile>
    )})
}


const Img = styled.img`
height: 18px;
width: 22px;

`

export default Sidebar

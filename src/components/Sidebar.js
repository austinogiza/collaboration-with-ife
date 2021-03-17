import React from 'react';
import styled,{ css } from 'styled-components';
import { Link } from 'react-router-dom';
import {FaFigma, DiSwift} from 'react-icons/fa';


const Sidebar = () => {
  return (
    <Nav> 
      <Rect>
          <Link>
            <Icon circle>UI</Icon>
          </Link> 
    
          <Link>
            <Icon circle>UI</Icon>
         </Link> 
      </Rect>
      <Card>
        {/* <Tile>
          <Link className='tile'>
            <Icon pink1>UI</Icon>
            Courses
          </Link>
        </Tile>
        <Tile>
          <Link className='tile'>
            <Icon blue1>UI</Icon>
            Tutorials
          </Link>
        </Tile>
        <Tile>
          <Link className='tile'>
            <Icon purple>UI</Icon>
            Downloads
          </Link>
        </Tile> */}
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


// const white1 = '#F2F6FF';
// const white2 = '#E3E8FF';
// const white3 = '#D3D9f3';
// const blue = '#1A2151';
// const purple1 = '#6234D5';
// const purple2 = '#8449FC';
// const cyan1 = '#00C6F2';
// const cyan2 = '#00CFFD';
// const pink1 = '#FF52A0';
// const pink2 = '#FF6FB0';

const Nav = styled.nav`
  display:flex;
  flex-direction:column;
  justify-contents:flex-start;
  align-items:flex-start;
  width:320px;
  background:#E3E8FF;
  padding:5% 0;
`
const Card = styled.ul`
  width:95%;
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
  }

  a:hover{
    background:#00C6F2;
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
//filter:drop-shadow(0px 5px 10px);

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
margin:auto;
width:294px;
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
      {name:'UI Design for iOS 14',icon:'',color:'pink2',path:''},
      {name:'SwiftUI for iOS 14',icon:'',color:'blue2',path:''},
      {name:'UI design for developers',icon:'',color:'cyan',path:''},
    ],
    color:'pink1',
  },
  {header:'Tutorials',
    tiles:[
      {name:'UI design',icon:'',color:'orange',path:''},
      {name:'SwiftUI',icon:'',color:'blue3',path:''},
      {name:'Figma',icon:'',color:'black',path:''},
    ],
    color:'blue1',
  },
  {header:'Downloads',
  color:'purple',
  },
]
const renderHeaders = () =>{
    return navlist.map((item,index)=>{
      return(
        <Tile key={`${item.header}`}>
          <Link className='tile'>
            <Icon color={item.color}>UI</Icon>
            {item.header}
          </Link>
        </Tile>
      )
    })
}

const renderSection = (section) =>{
  const list = navlist.filter(item=>item.header===section)[0];
  return list['tiles'].map((item,index)=>{
    return (
      <Tile key={`${section}Tile${index}`}>
        <Link className='tile'>
          <Icon color={item.color}>UI</Icon>
          {item.name}
        </Link>
      </Tile>
    )})
}


export default Sidebar

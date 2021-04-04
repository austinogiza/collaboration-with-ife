import React from 'react'
import styled from 'styled-components'
import { MediumText,SmallText } from '../styles/TextStyles'

const Widget = ({image,header,details, width,color}) => {
    return (
      <Body>

      <Icon>

          <Wrap color={color}>
              <Logo src={image}/>
          </Wrap>
      </Icon>
      <Text>

          <Header>{header}</Header>
          <Details>{details}</Details>
          <Bar><Progress width={width}/></Bar>
      </Text>

      </Body>
    )
}

const Body = styled.div`
display: grid;
grid-template-columns: 50px auto;
grid-gap:12px;
margin: 10px 0;
`
const Icon = styled.div`
height: 48px;
width: 48px;
border-radius: 16px;
background: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05), 0px 20px 40px rgba(92, 103, 153, 0.2);
`
const Wrap = styled.div`
width: 32px;
height: 32px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
background: ${props => props.color};
`
const Logo = styled.img`
height: 17px;
width: 17px;


`
const Text = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
width: 100%;
`
const Header = styled(MediumText)`
color: #000000;
margin: 0;
width: 100%;
`
const Details = styled(SmallText)`
margin: 8px 0;
color: rgba(0, 0, 0, 0.6);
width: 100%;
`
const Bar = styled.span`
height: 5px;
width: 120px;
position: relative;
border-radius: 8px;
padding: 1px;
background: #D3D9F3;
`
const Progress = styled.span`
height: 3px;
width: ${props=> props.width};
position: absolute;
background: #FFFFFF;
border: 0.360963px solid rgba(0, 0, 0, 0.05);
left: 1px;
top: 1px;
border-radius: 4px;

`


export default Widget

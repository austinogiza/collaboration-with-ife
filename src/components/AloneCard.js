import React from 'react'
import styled from 'styled-components'
import { SmallHeader,SmallText} from '../styles/TextStyles'

const AloneCard = ({header, details, image, hang, icon}) => {
    return (
     <Body >

     <Hang hang={hang}>
         <Handicon src={icon}/>
     </Hang>
     <Image src={image}/>
     <Header>{header}</Header>
<Details>{details}</Details>
</Body>
    )
}


const Body = styled.div`
cursor: pointer;
transition: 0.3s ease-in-out;
position: relative;
height: 180px;
width: 160px;
border-radius: 30px;
display: flex;
color: #000;
flex-direction: column;
padding: 20px;
`

const Image = styled.img`
height: 80px;
width: 120px;
margin: 0;
`
const Header = styled(SmallHeader)`
color: #000;
width: 100%;
min-height: 40px;
margin: 4px 0;
`
const Details = styled(SmallText)`
color: rgba(0, 0, 0, 0.7);
width: 100%;
min-height: 16px;
margin: 0;
`

const Hang = styled.div`
cursor: pointer;
transition: 0.3s ease-in-out;
:hover{
    transition: 0.3s ease-in-out;
    transform: scale(1.05);
}
height: 24px;
width: 24px;
right: 16px;
top: 16px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
background: ${props => props.hang};
position: absolute;
box-shadow: inset 1px 1px 0px rgba(255, 255, 255, 0.25), inset -1px -1px 0px rgba(255, 255, 255, 0.25);
`
const Handicon = styled.img`
height: 14px;
width: 14px;
`
export default AloneCard

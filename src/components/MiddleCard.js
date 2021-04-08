import React from 'react'
import styled from 'styled-components'
import { Header2,MediumText} from '../styles/TextStyles'

const MiddleCard = ({header, details, image,color, hang, icon}) => {
    return (
     <Body color={color}>

     <Hang hang={hang}>
         <Handicon src={icon}/>
     </Hang>
     <Image src={image}/>
     <Header>{header}</Header>
<Details>{details}</Details>
<Flex>

    <Ring>
<Bell src="https://res.cloudinary.com/austinogiza/image/upload/v1617543246/Notification_Add_Outline_ikh5ux.svg"/>
    </Ring>
    <Ring>
    <Bell src="https://res.cloudinary.com/austinogiza/image/upload/v1617543246/Favourite_Fill_Color_sibuk6.svg"/>
        </Ring>
</Flex>
</Body>
    )
}


const Body = styled.div`
position: relative;
cursor: pointer;
transition: 0.3s ease-in-out;
height: 400px;
max-width: 380px;
margin: 0 auto;
width: 100%;
border-radius: 30px;
background: ${props => props.color};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;

`
const Image = styled.img`
height: 150px;
width: 100%;
max-width: 300px;
margin: 0;
`
const Header = styled(Header2)`
color: #000000;
width: 100%;
min-height: 40px;
margin: 4px 0;
text-align: center;
`
const Details = styled(MediumText)`
color: rgba(0, 0, 0, 0.7);
width: 100%;
min-height: 16px;
margin: 10px 0;
text-align: center;
`

const Hang = styled.div`
cursor: pointer;
transition: 0.3s ease-in-out;
:hover{
    transition: 0.3s ease-in-out;
    transform: scale(1.05);
}
height: 44px;
width: 44px;
right:20px;
top:20px;
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

const Flex = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
height: 32px;
width: 74px;
margin: 10px 0;
`
const Ring = styled.div`
width: 32px;
height: 32px;
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(20px);
margin:  0 0 0 5px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
transition: 0.3s ease-in-out;
:hover{
    transition: 0.3s ease-in-out;
    transform: scale(1.05);
}
`
const Bell = styled.img`
height: 24px;
width: 24px;
`

export default MiddleCard

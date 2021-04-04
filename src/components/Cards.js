import React from 'react'
import styled from 'styled-components'
import FirstCard from './FirstCard'
import LastCard from './LastCard'
import MiddleCard from './MiddleCard'

const Cards = () => {
    return (
       <Body>
<FirstCard/>
<MiddleCard hang="linear-gradient(180deg, #E1467C 0%, #FF9CE3 100%);" icon="https://res.cloudinary.com/austinogiza/image/upload/v1617540349/Pen_Tool_Color_sb5jdv.svg" color="linear-gradient(180deg, #FF5252 0%, #FF72B6 100%)" header="UI Design for iPadOS and Mac" details="20 videos - 3 hours" image="https://res.cloudinary.com/austinogiza/image/upload/v1617537234/building-user-interface_1x_1_vknfk3.svg"/>
<LastCard/>
       </Body>
    )
}

const Body = styled.div`
width: 100%;
min-height: 60px;
display: grid;
grid-template-columns: 1.5fr 1.4fr 1fr;
grid-gap: 20px;
margin: 0 0 20px 0;
@media only screen and (max-width: 800px){
    grid-template-columns: 1fr;  
}
`

export default Cards

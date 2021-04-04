import React from 'react'
import styled from 'styled-components'
import SingleCard from './SingleCard'

const LastCard = () => {
    return (
     <Body>


<SingleCard color="linear-gradient(200.42deg, #FF8570 13.57%, #F9504A 98.35%)" hang="linear-gradient(180deg, #2FB8FF 0%, #9EECD9 100%)" icon="https://res.cloudinary.com/austinogiza/image/upload/v1617539465/swift_mw07jg.svg" header="React for Designers" details="20 videos - 3 hours" image="https://res.cloudinary.com/austinogiza/image/upload/v1617537233/Illustration_4_w8gckx.svg"/>
<SingleCard color="linear-gradient(180deg, #E1467C 0%, #FF9CE3 100%)" hang="linear-gradient(180deg, #2FB8FF 0%, #9EECD9 100%)" icon="https://res.cloudinary.com/austinogiza/image/upload/v1617539465/swift_mw07jg.svg" header="Build a Mac app in SwiftUI" details="20 videos - 3 hours" image="https://res.cloudinary.com/austinogiza/image/upload/v1617537233/Illustration_5_uhyjtx.svg"/>
     </Body>
    )
}

const Body = styled.div`
width: 100%;
height: 400px;
display: grid;
grid-gap: 20px;
grid-template-columns: repeat(1,1fr);
grid-template-rows: repeat(2,1fr);
place-items: center;
@media only screen and (max-width: 800px){
    grid-template-columns: repeat(2,1fr);
grid-template-rows: repeat(1,1fr);
height: 230px;
}
`


export default LastCard

import React from 'react'
import styled from 'styled-components'
import AloneCard from './AloneCard'
import ListTile from './ListTile'
import SingleCard from './SingleCard'

const FirstCard = () => {
    return (
     <Body>

<Top>
<SingleCard color="linear-gradient(218.31deg, #007AFF 0%, #50A4FF 100%)" hang="linear-gradient(200.42deg, #FF8570 13.57%, #F9504A 98.35%);" header="UI Design for 
iOS 14" icon="https://res.cloudinary.com/austinogiza/image/upload/v1617539465/ios_ghqqoj.svg" details="20 videos - 3 hours" image="https://res.cloudinary.com/austinogiza/image/upload/v1617537233/Illustration_1_kkgho0.svg"/>
<SingleCard hang="linear-gradient(180deg, #2FB8FF 0%, #9EECD9 100%)" icon="https://res.cloudinary.com/austinogiza/image/upload/v1617539465/swift_mw07jg.svg" color="linear-gradient(200.44deg, #4316DB 13.57%, #9076E7 98.38%)" header="UI Design for Android" details="20 videos - 3 hours" image="https://res.cloudinary.com/austinogiza/image/upload/v1617537233/Illustration_2_g2wujl.svg"/>

</Top>
<Bottom>
<Bott>
<AloneCard hang="linear-gradient(180deg, #2FB8FF 0%, #9EECD9 100%)" icon="https://res.cloudinary.com/austinogiza/image/upload/v1617539465/swift_mw07jg.svg" header="Build a SwiftUI app for iOS 14" details="20 videos - 3 hours" image="https://res.cloudinary.com/austinogiza/image/upload/v1617537234/Illustration_3_gfdf68.svg"/>
<List>
<ListTile number="1" text="Matched Geometry Effect"/>
<ListTile number="2" text="Grid Layout"/>
<ListTile number="3" text="App Accent Color"/>
<ListTile number="4" text="Toolbar"/>
<ListTile number="5" text="Dynamic Type"/>

</List>
</Bott>

</Bottom>
     </Body>
    )
}

const Body = styled.div`
width: 100%;
height: 400px;
display: grid;
grid-gap: 20px;
place-items: center;
grid-template-rows: repeat(2,1fr);
@media only screen and (max-width: 800px){
    min-height: 400px;
}
`

const Top = styled.div`
display: grid;
width: 100%;
min-height: 200px;
grid-template-columns: repeat(2,1fr);
grid-gap: 20px;
place-items: center;
/* @media only screen and (max-width: 700px){
    grid-template-columns: repeat(1,1fr);  
} */
`
const Bottom = styled.div`
width: 100%;
height: 400px;

@media only screen and (max-width: 700px){
    display: flex;
flex-direction: column;
align-items: center;  
}

`

const Bott = styled.div`
max-width: 340px;
width: 100%;
margin: 0 auto;
height: 180px;
background: linear-gradient(180deg, #2FB8FF 0%, #9EECD9 100%);
border-radius: 30px;
display: grid;
grid-gap: 20px;
grid-template-columns: repeat(2,1fr);
cursor: pointer;
transition: 0.3s ease-in-out;

`

const List = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`
export default FirstCard

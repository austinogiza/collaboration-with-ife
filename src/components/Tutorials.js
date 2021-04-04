import React from 'react'
import styled from 'styled-components'
import { HeaderText } from '../styles/TextStyles'
import Widget from './Widget'

const Tutorials = () => {
    return (
       <Body>
<Text>
<Textlarge>Tutorials</Textlarge>
</Text>
<Bottom>

    <Widget color="#76FFD6" image="https://res.cloudinary.com/austinogiza/image/upload/v1617546948/Pen_Tool_Color_eupls2.svg" width="70%" header="Design a Widget" details="iOS 14 - 3:01"/>
    <Widget color="#000000" image="https://res.cloudinary.com/austinogiza/image/upload/v1617546948/logo-figma_bl6izw.svg" width="50%" header="Vector Network" details="Figma - 2:48"/>
    
    <Widget color="#000000" image="https://res.cloudinary.com/austinogiza/image/upload/v1617546948/logo-figma_bl6izw.svg" width="30%" header="Auto Layout" details="Figma - 2:32"/>

    <Widget color="#491EB8" image="https://res.cloudinary.com/austinogiza/image/upload/v1617547901/Path_hjhjlb.svg" width="10%" header="Matched Geometry Effect" details="SwiftUI - 3:01"/>
    
    <Widget color="#000" image="https://res.cloudinary.com/austinogiza/image/upload/v1617546948/logo-sketch_ct9wuz.svg" width="10%" header="Best Plugins" details="Sketch - 2:11"/>
    
    <Widget color="#000" image="https://res.cloudinary.com/austinogiza/image/upload/v1617546948/logo-figma_bl6izw.svg" width="25%" header="Big Sur Icon" details="Figma - 2:28"/>

    <Widget color="#FF5A6D" image="https://res.cloudinary.com/austinogiza/image/upload/v1617548219/Pen_Tool_Color_r0tcuj.svg" width="5%" header="Design for App Clip" details="iOS 14 Design - 3:00"/>
    <Widget color="#2E001F" image="https://res.cloudinary.com/austinogiza/image/upload/v1617546948/xd_lxq8ps.svg" width="20%" header="Auto-Animate" details="Adobe XD - 4:01"/>
    <Widget color="#000" image="https://res.cloudinary.com/austinogiza/image/upload/v1617546948/logo-sketch_ct9wuz.svg" width="3%" header="Wireframes" details="Sketch - 3:11"/>
    <Widget color="#00CFFD" image="https://res.cloudinary.com/austinogiza/image/upload/v1617548604/Path_ejtfix.svg" width="63%" header="Create a Widget" details="SwiftUI - 2:59"/>
    <Widget color="#4353FF" image="https://res.cloudinary.com/austinogiza/image/upload/v1617546948/Vector_f1e4ln.svg" width="83%" header="Lottie Animations" details="Webflow - 2:43"/>
    <Widget color="#00CFFD" image="https://res.cloudinary.com/austinogiza/image/upload/v1617548604/Path_ejtfix.svg" width="33%" header="Layout Grid" details="SwiftUI - 1:59"/>

</Bottom>

       </Body>
    )
}

const Body = styled.div`
width: 100%;
min-height: 33px;
margin: 40px 0;
`

const Text = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
`
const Textlarge = styled(HeaderText)`
margin: 4px 0;
`

const Bottom = styled.div`
width: 100%;
min-height: 200px;
display: grid;
margin: 20px 0;
grid-gap: 20px;
grid-template-columns: repeat(3,1fr);
grid-template-rows: repeat(2,1fr);

@media only screen and (max-width: 800px){

    grid-template-columns: repeat(2,1fr);


}
@media only screen and (max-width: 650px){
  
    grid-template-columns: repeat(1,1fr);

}
`
export default Tutorials

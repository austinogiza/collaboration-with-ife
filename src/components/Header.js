import React from 'react'
import styled from 'styled-components'
import { MediumText, HeaderText} from '../styles/TextStyles'

const Header = () => {
const onSubmit =e=>{
e.preventDefault()

}
return (
       <Body>
<Text>
<Textsmall>{new Date().getDate()} {new Date().toLocaleDateString("default", {month: "long"})}, {new Date().getFullYear()}</Textsmall>
<Textlarge>Courses</Textlarge>
</Text>

<Search>
<Searchform onSubmit={onSubmit}>

    <Searchbox placeholder="Search" />
    
</Searchform>
</Search>
       </Body>
    )
}


const Body = styled.section`
width: 100%;
min-height: 60px;
display: grid;
grid-template-columns: repeat(2,1fr);
margin: 0 0 20px 0;
grid-gap: 40px;
@media only screen and (max-width: 700px){
    grid-template-columns: repeat(1,1fr); 
    margin: 0 0 40px 0; 
}

`
const Text = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
`
const Textsmall = styled(MediumText)`
margin: 0;
`
const Textlarge = styled(HeaderText)`
margin: 4px 0;
`
const Search = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-end;

@media only screen and (max-width: 700px){
    align-items: center;
}
`
const Searchform = styled.form`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-end;
@media only screen and (max-width: 700px){
    align-items: center;
}
`
const Searchbox = styled.input`
height: 44px;
width: 315px;
outline: none;
border-radius: 16px;
padding: 13px 16px 12px 40px;
background: #E3E8FF;
border: none;
font-size: 17px;
font-style: normal;
font-weight: 600;
line-height: 20px;
background-image: url('data:image/svg+xml;utf8,<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.44189 13.9541C8.76172 13.9541 9.99854 13.5557 11.0278 12.875L14.6636 16.519C14.9043 16.7515 15.2114 16.8677 15.5435 16.8677C16.2324 16.8677 16.7388 16.3281 16.7388 15.6475C16.7388 15.332 16.6309 15.0249 16.3984 14.7925L12.7876 11.165C13.5347 10.1108 13.9746 8.81592 13.9746 7.42139C13.9746 3.82715 11.0361 0.888672 7.44189 0.888672C3.84766 0.888672 0.90918 3.82715 0.90918 7.42139C0.90918 11.0156 3.84766 13.9541 7.44189 13.9541ZM7.44189 12.2109C4.81055 12.2109 2.65234 10.0527 2.65234 7.42139C2.65234 4.79834 4.81055 2.63184 7.44189 2.63184C10.0732 2.63184 12.2314 4.79834 12.2314 7.42139C12.2314 10.0527 10.0732 12.2109 7.44189 12.2109Z" fill="black" fill-opacity="0.3"/></svg>');
background-repeat: no-repeat;
background-position: left 16px top 50%;
`

export default Header

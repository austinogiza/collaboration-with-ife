import React from 'react'
import styled from 'styled-components'
import { SmallText } from '../styles/TextStyles'

const ListTile = ({number,text}) => {
    return (
       <Body>

<Number>{number}</Number><Text>
{text}
</Text>
       </Body>
    )
}


const Body = styled.div`
display: flex;
flex-direction: row;
margin: 5px 0;
`
const Number = styled(SmallText)`
height: 20px;
width: 20px;
background: #3913B8;
color: #fff;
border-radius: 50%;
flex: 0 0 0 20%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Text = styled(SmallText)`
color: #000000;
flex: 1;
margin: 0 8px;

`
export default ListTile

import React from 'react'
import styled from 'styled-components'
import Cards from './Cards'
import Header from './Header'
import Tutorials from './Tutorials'

const Right = () => {
  return (

<Body>
<Header/>
<Cards/>
<Tutorials/>

</Body>
  )
}


const Body = styled.div`
background: #F2F6FF;

width: 100%;
height:100%;
padding: 40px 26px;
`

export default Right

import React from 'react'
import styled from 'styled-components'
import Right from '../components/Right'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
<>
<Body>
  <Sidebar/>
  <Right/>
</Body>

</>
  )
}


const Body  = styled.div`
width: 100%;
height:100%;
display: grid;
grid-template-columns:330px auto;
grid-auto-rows: minmax(300px,auto);
@media only screen and (max-width: 650px){
  grid-template-columns:1fr;
}
`

export default Home

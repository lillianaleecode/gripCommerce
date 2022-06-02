import React from 'react'
import styled from 'styled-components'

//Styles: (using styled-components)
const Container = styled.div`
    height:60px;
    background-color: magenta;
`


const Navbar = () => {
  return (
    //<div>Navbar!</div> //instead of doing it like this, use styled-components to style css it.
    <Container>Navbar!</Container>

  )
}

export default Navbar
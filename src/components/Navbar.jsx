import React from 'react'
import styled from 'styled-components'

//Styles: (using styled-components)
const Container = styled.div
`
    height:60px;
    background-color: magenta;
`
const Wrapper = styled.div
`
    display: flex;
    justify-content: space-between;

`
const Left = styled.div`
    flex: 1;
`

const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
`

const Navbar = () => {
  return (
    //<div>Navbar!</div> //instead of doing it like this, use styled-components to style css it.
    <Container>
        <Wrapper>
            <Left>
                <p>left</p>
            </Left>
            <Center>Center</Center>
            <Right>
                <p>right</p>
            </Right>
        </Wrapper>

    </Container>

  )
}

export default Navbar
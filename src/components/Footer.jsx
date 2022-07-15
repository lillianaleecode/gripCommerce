import React from 'react'
import styled from 'styled-components'

import { createTheme } from '@mui/material/styles'; //for customizing Material


//theme: Customizing Material UI:
const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },

  palette: {
            lila: {
            main: '#AB46D2',
            darker: '#053e85',
            },
            pink: {
            main: '#FF6FB5',
            contrastText: '#fff',
            },
  },

});
 //git practice

////&&&&&&&&&&&&&&&&&&&&&&&&&&&& 
//STYLES (using styled-components)

//Container: contains whole NavBar:
const Container = styled.div `
    //flex-direction: column;
    display: flex;
    padding: 20px;
    justify-content: space-between;
   
    //background-color: ;
    //border: 1px solid red;
    
`

//Wrapper: puts the navbar sectioned into 3 parts
const Wrapper = styled.div `
    padding: 10px 20px;
    display: flex; //makes it horizontal
    align-items: center;
    justify-content: space-between;
    //flex-direction: column;
    //border: 1px solid red;

`
const Left = styled.div`
    flex: 1; //flex 1: make each of the 3 sections divided evenly. (like doing 100/3)
    align-items: center ;
    display: flex;
    align-items: center;
    flex-direction: column;
    //border: 1px solid red;
`

const Center = styled.div`
    flex: 1;
    flex-direction: column;
    //border: 1px solid red;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end; //move to the right
    margin-right: 25px;
    flex-direction: column;
    //border: 1px solid red;
`
//Left NavBar:
const Logo = styled.h1`
    flex: 1;
    text-align: center;
    font-weight: bold;

 
`
const Text = styled.span`
    font-size: 14px;
    cursor: pointer;
    margin-right: 5px;
    margin-left: 5px;
    align-items: center;


`

//Center NavBar:

const Title = styled.h3`
`

//Right NavBar:

const ListItem = styled.div`
    font-size: 14;
    cursor: pointer;
    margin-left: 25px;
    
    

 
`

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&

const Footer = () => {
  return (
    //<div>Navbar!</div> //instead of doing it like this, use styled-components to style css it.
    <Container>
        <Wrapper>
            <Left>
                <Logo>GRIP COMMERCE.</Logo>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
                
      

            </Left>
            <Center>
                <Title>Useful Links</Title>

                <ListItem>Home</ListItem>
                <ListItem>Body</ListItem>
                <ListItem>Hands</ListItem>
                <ListItem>Self Care</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Terms</ListItem>

            </Center>

            <Right>
                <Title>Contact</Title>
                <ListItem>Address: Berlin, Berlin, Germany</ListItem>
                <ListItem>Phone: +12 345 678 910</ListItem>
            </Right>
        </Wrapper>

    </Container>

  )
}

export default Footer
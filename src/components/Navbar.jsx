import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'; //needs exact name from Material UI
import Input from '@mui/material/Input';
import { createTheme } from '@mui/material/styles'; //for customizing Material
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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


////&&&&&&&&&&&&&&&&&&&&&&&&&&&& 
//STYLES (using styled-components)

//Container: contains whole NavBar:
const Container = styled.div `
    height:60px;
    //background-color: ;
    //border: 1px solid red;
`

//Wrapper: puts the navbar sectioned into 3 parts
const Wrapper = styled.div `
    display: flex; //makes it horizontal
    justify-content: space-between;
    //border: 1px solid red;

`
const Left = styled.div`
    flex: 1; //flex 1: make each of the 3 sections divided evenly. (like doing 100/3)
    align-items: center ;
    display: flex;
    //border: 1px solid red;
`

const Center = styled.div`
    flex: 1;
    //border: 1px solid red;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end; //move to the right
    margin-right: 25px;
    //border: 1px solid red;
`
//Left NavBar:
const Languages = styled.span`
    font-size: 14px;
    cursor: pointer;
    margin-right: 5px;
    margin-left: 5px;
    align-items: center;
    padding: 5px;
`

const SearchContainer = styled.div`
    border: none;
    display: flex;
    margin-left: 5px;
    align-items: center;
    padding: 5px;
`
//Center NavBar:

const Logo = styled.h1`
    flex: 1;
    text-align: center;

 
`

//Right NavBar:

const MenuItem = styled.div`
    font-size: 14;
    cursor: pointer;
    margin-left: 25px;

 
`

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&

const Navbar = () => {
  return (
    //<div>Navbar!</div> //instead of doing it like this, use styled-components to style css it.
    <Container>
        <Wrapper>
            <Left>
                <Languages>EN</Languages>
                <Languages>DE</Languages>
                <SearchContainer>

                    <Input theme={theme}
                        sx={{
                        width: 150,
                        color: '#FF6FB5', }}
                        color="pink"
                        variant="contained"
                    /> 

                    <SearchIcon style={{color:"#FF6FB5", fontSize:16}} >Search Icon</SearchIcon> 

                </SearchContainer>

            </Left>
            <Center>
                <Logo>GRIP COMMERCE.</Logo>

            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary"/>
                    <ShoppingCartIcon />
                </MenuItem>
                    

            </Right>
        </Wrapper>

    </Container>

  )
}

export default Navbar
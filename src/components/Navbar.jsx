import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'; //needs exact name from Material UI
import Input from '@mui/material/Input';
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

`
const Left = styled.div`
    flex: 1; //flex 1: make each of the 3 sections divided evenly. (like doing 100/3)
    align-items: center ;
    display: flex;
`

const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
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

                    <SearchIcon>Search Icon</SearchIcon> 

                </SearchContainer>

            </Left>
            <Center>

            </Center>
            <Right>
                <p>right</p>

            </Right>
        </Wrapper>

    </Container>

  )
}

export default Navbar
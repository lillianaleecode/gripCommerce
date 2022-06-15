import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { useState } from "react";
import styled from "styled-components";

import {sliderItems} from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: #ada1a1;

`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%; //circle
  display: flex;
  align-items: center;
  justify-content: center;

  //positioning the arrows
  position: absolute;
  top: 0;
  bottom: 0;

  left: ${(props) => props.direction === "left" && "10px"}; //props: direction="left"
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto; //center vertically
  cursor: pointer;
  opacity: 0.5;
  z-index: 2; 
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex; //making slides being Horizontal
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw); //move the slides X axis a 100pixels
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%; // which is 100vh as Slide is parent
  flex: 1;
`;

const Image = styled.img`
  height: 100%; // 80% size of Slide (parent)
  width: 100%;
  object-fit: cover;
  justify-content: center;
  
  
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
 
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
    <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftIcon/>
    </Arrow>

    <Wrapper slideIndex={slideIndex} /* data.js */ >  
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>DISCOVER</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

    <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightIcon/>
    </Arrow>
</Container>

  );
};

export default Slider;
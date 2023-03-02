import React from "react";
import styled from "styled-components";
// import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";

const Section = ({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) => {
  const transition = { type: "spring", duration: 3 };

  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <Slide direction="up">
          <h1>{title}</h1>
          <p>{description}</p>
        </Slide>
      </ItemText>

      <Buttons>
        <ButtonGroup>
          <Slide direction="left">
            <LeftButton>{leftBtnText}</LeftButton>
          </Slide>
          <Slide direction="right">
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </Slide>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    background-image {
      width: 100%;
    }
  }
  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 21px;
    }
  }
`;
const ItemText = styled.div`
  color: black;
  padding-top: 15vh;
  text-align: center;
`;
const LeftButton = styled.div`
  width: 256px;
  height: 40px;
  background: #3e4042;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background: white;
  color: black;
  opacity: 0.65;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;

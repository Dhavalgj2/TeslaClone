import React from "react";
import styled from "styled-components";
import Section from "./Section";
import datas from "../services/datas.js";

const Home = () => {
  return (
    <Container>
      {datas.map((data) => (
        <Section
          title={data.title}
          description={data.description}
          backgroundImg={data.backgroundImg}
          leftBtnText={data.leftBtnText}
          rightBtnText={data.rightBtnText}
        />
      ))}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;

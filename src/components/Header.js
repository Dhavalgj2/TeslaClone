import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
// import logo from "../../public/images/logo.svg";
const Header = () => {
  return (
    <Container>
      <a href="">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="">Model S</a>

        <a href="">Model 3</a>

        <a href="">Model X</a>

        <a href="">Model Y</a>

        <a href="">Cybertruck</a>

        <a href="">Powerwall</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu />
      </RightMenu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  position: fixed;
  min-height: 60px;
  align-items: center;
  padding: 0 20px;
  left: 0;
  top: 0;
  right: 0;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    padding: 0 10px;
    font-weight: 600;
    text-transform: uppercase;

    :hover {
      background-color: #a1bdd2;
      border-radius: 4px;
    }
  }
  @media (max-width: 768px) {
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    :hover {
      background-color: #a1bdd2;
      border-radius: 4px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
// import logo from "../../public/images/logo.svg";
const Header = () => {
  const [show, setShow] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);

  const openHandler = () => {
    setShow(true);
  };
  const closeHandler = () => {
    setShow(false);
  };
  return (
    <Container>
      <a href="">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a href="" key={index}>
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="">Shop</a>
        <a href="">Tesla Account</a>
        <CustomMenu onClick={openHandler} />
      </RightMenu>

      <BurgerNav show={show}>
        <CloseWrapper>
          <CustomClose onClick={closeHandler} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#">{car}</a>
            </li>
          ))}

        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
      </BurgerNav>
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
  z-index: 1;
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
  @media only screen and (max-width: 480px) {
    a {
      display: none;
    }
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
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  text-align: left;
  font-size: 18px;
  transform: ${(props) => (props.show ? "translateX(0%)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;
  li {
    padding: 10px 0px;
    align-items: center;
    border-bottom: 2px solid gray;

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  justify-content: flex-end;
  display: flex;
`;

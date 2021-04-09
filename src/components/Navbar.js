import React from "react";
import styled from "styled-components";
import coffee from "../assets/coffee.png";

const Container = styled.div`
  display: flex;
  min-height: 7vh;
  justify-content: space-between;
  align-items: center;
`;

const RightSide = styled.div`
  display: flex;
  width: 15vw;
  margin-right: 3vw;
  justify-content: space-around;
`;

const Logo = styled.img`
  margin-left: 15vw;
  width: 6vw;
  height: 8vh;
`;
const Links = styled.a`
  color: black;
`;

const Navbar = () => {
  return (
    <Container>
      <Logo src={coffee} />

      <RightSide>
        <Links href="https://docs.distributed.town/developers/q2t">about</Links>
        <Links href="https://docs.distributed.town/developers/skill-wallet">
          docs
        </Links>
      </RightSide>
    </Container>
  );
};

export default Navbar;

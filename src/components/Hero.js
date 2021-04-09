import React from "react";
import styled from "styled-components";
import { Heading, Text } from "styled-typography";
import Fade from "react-reveal/Fade";

import music from "../assets/music.svg";
import app_store from "../assets/app_store.svg";
import play_store from "../assets/play_store.svg";

const Container = styled.div`
  display: flex;
  width: 70vw;
  min-height: 80vh;
  margin: 0 auto;
  margin-top: 15vh;

  justify-content: space-between;
`;

const LeftSide = styled.div`
  display: flex;
  width: 30vw;
  height: 45vh;

  margin-top: 4vh;
  flex-direction: column;
  justify-content: space-between;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Logo = styled.img`
  display: flex;
  width: 30vw;
  height: 48vh;
`;

const Hero = () => {
  return (
    <Container>
      <LeftSide>
        <Heading>Skillwallet</Heading>

        <Fade bottom>
          <Text>
            A new kind of identity. Enabling new people to use old technology,
            without rambling their words.
          </Text>
          <Text>Creating css is the new manual labour.</Text>
        </Fade>
        <Buttons>
          <img src={app_store} width={218} height={145.5} />

          <img src={play_store} width={218} height={145.5} />
        </Buttons>
      </LeftSide>

      <Fade right>
        <Logo src={music} />
      </Fade>
    </Container>
  );
};

export default Hero;

import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from 'styled-typography'
import Pulse from 'react-reveal/Pulse'

import panda from '../assets/panda.png'

const Container = styled.div`
  display: flex;
  width: 65vw;
  margin: 0 auto;

  justify-content: space-between;
  align-items: center;
`

const Image = styled.img`
  height: 40vh;
  width: 20vw;
`

const OtherSection = () => {
  return (
    <Pulse>
      <Container>
        <Text>
          Hey. there's more here. On the 30th of September we dined together at the Mitre. <br />
          Just lose it, go crazy, oh heyhey.
        </Text>

        <Image src={panda} />
      </Container>
    </Pulse>
  )
}

export default OtherSection

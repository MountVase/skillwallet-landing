import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from 'styled-typography'
import Pulse from 'react-reveal/Pulse'

import PhoneAnimation from './PhoneAnimation'

const Container = styled.div`
  display: flex;
  width: 65vw;
  margin: 0 auto;

  justify-content: space-between;
  align-items: center;
`

const Section = () => {
  return (
    <Pulse>
      <Container>
        <PhoneAnimation />

        <Text>
          Hey. there's more here. On the 30th of September we dined together at the Mitre. <br />
          Just lose it, go crazy, oh heyhey.
        </Text>
      </Container>
    </Pulse>
  )
}

export default Section

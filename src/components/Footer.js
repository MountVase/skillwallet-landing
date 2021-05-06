import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  min-height: 7vh;
  justify-content: center;
  align-items: flex-end;
`

const Links = styled.a`
  margin: 10px;
  color: black;
`

const Footer = () => {
  return (
    <Container>
      <Links href="https://docs.distributed.town/developers/q2t">about</Links>
      <Links href="https://docs.distributed.town/developers/skill-wallet">docs</Links>
    </Container>
  )
}

export default Footer

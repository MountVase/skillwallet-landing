import React from 'react'
import Styled from 'styled-components/macro'
import Buttons from './Buttons'
import Addition from './Addition'

const Component = Styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:1rem;
  min-height:50vh;
`
const Wrapper = Styled.div`
width:100%;
max-width:800px;
display:flex;
flex-direction:column;
align-items:center;

`
const Slogan = Styled.div`
font-family:'Raleway',sans-serif;
margin:0;
font-size:3rem;
max-width:25rem;
text-align:center;
margin-bottom:2rem;
font-weight:600;

`

const Text = Styled.h1`
margin:0;
font-size:1.25rem;
margin-bottom: 15px;

`

const Hero = () => (
  <Component>
    <Wrapper>
      <Slogan>SkillWallet</Slogan>
      <Text>Discover a new pseudonymous paradise.</Text>
      <Text>Decentralized.</Text>
      <Buttons />
    </Wrapper>
  </Component>
)

export default Hero

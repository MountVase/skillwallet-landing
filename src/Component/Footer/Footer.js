import React from 'react-dom'
import Styled from 'styled-components/macro'

const Component = Styled.div`
background-color:#1a202c;
color:#fff;
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
padding 2rem;


`
const Wrapper = Styled.div`
width:100%;
max-width:800px;
display:grid;
grid-gap:2rem;
grid-template-columns:1fr 1fr 1fr;
grid-template-rows: 2fr 1fr; 

`
const Header = Styled.h3`
margin:0;`

const Row = Styled.div`
display:flex;
flex-direction: column;
`
const Link = Styled.a`
color:#fff;
text-decoration:none;
font-size:0.85rem;
margin-bottom:0.5rem;
`

const Footer = () => (
  <Component>
    <Wrapper>
      <Header>Skillwallet is hiring big.</Header>
      <Row>
        <Link href="#">About us</Link>
        <Link href="#">Contact us</Link>
      </Row>
      <Row>
        <Link href="#">GitHub</Link>
        <Link href="#">Discord</Link>
      </Row>
    </Wrapper>
  </Component>
)

export default Footer

import React from 'react'
import Styled from 'styled-components/macro'

const Component = Styled.div`
display:flex;
justify-content:center;
padding:1rem;
`
const Button = Styled.button`
    background-color: #ebe2d1;
    border:0;
    margin: 0.5rem;
    padding:0.5rem 1.25rem;
    border-radius:0.375rem;
    font-size: 1.1rem;
    transition: background-color 0.25s ease-in;


    &:hover{
        cursor:pointer;
        background-color: #EDF2F7;
    }
`

const Header = () => (
  <Component>
    <a href="https://docs.distributed.town/" target="_blank" rel="noopener noreferrer">
      <Button>Documentation</Button>
    </a>
    <a href="https://dogehouse.tv/" target="_blank" rel="noopener noreferrer">
      <Button>Blog</Button>
    </a>
    <Button>Qualcos'altro?</Button>
  </Component>
)

export default Header

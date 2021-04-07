import React from 'react'
import Styled from 'styled-components/macro'

const Component = Styled.div`
    display:flex;
    padding:3rem 0;
`

const AppleButton = Styled.button`

    border-radius:0.375rem;

    color:#fff;
  
    margin-left:1rem;
    line-height:1.25;
    &:hover{
        cursor:pointer;
        border :1px solid #9ae6b4;
        background-color:#9ae6b4;
    }

`

const GoogleButton = Styled.button`

    border-radius:0.375rem;

    color:#fff;
    border :1px solid white;
    margin-left:1rem;
    line-height:1.25;
    &:hover{
        cursor:pointer;
        border :1px solid white;
        background-color: brown;
    }

`

const Buttons = () => (
  <Component>
    <img src="app_store.svg" width={218} height={145.5} />

    <img src="google_play.svg" width={218} height={145.5} />
  </Component>
)
export default Buttons

import React from 'react'
import { Component, Wrapper, Subheader, Header, Text, Item } from './Component'

const LeftSection = () => (
  <Component bg>
    <Wrapper row>
      <Item right>
        <Subheader>Amazing collaboration</Subheader>
        <Header>Connect to everyone you need</Header>
      </Item>
      <Item center ml>
        <img src="skillwallet_logo.png" width={257.75} height={172} />

        <Text>
          Creating identity from scratch isn't easy, but worth it. We've created a fully functioning, peertopeer,
          decentralized, (insert more buzz-words here) filled product :)))
        </Text>
      </Item>
    </Wrapper>
  </Component>
)

export default LeftSection

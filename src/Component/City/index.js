import styled from 'styled-components'
import Svg from './Svg'

const Wrapper = styled.div`
  width: 100%;
  align-items: flex-start;
  margin-top: -18%;
`

const City = () => {
  return (
    <Wrapper>
      <Svg />
    </Wrapper>
  )
}

export default City

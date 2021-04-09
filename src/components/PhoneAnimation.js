import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../assets/phone-animation.json'

const PhoneAnimation = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  }

  return (
     <Lottie options={defaultOptions} height={300} width={300} />
  )
}

export default PhoneAnimation


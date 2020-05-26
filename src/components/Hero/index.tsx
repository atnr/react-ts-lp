/**@jsx jsx*/
import React from 'react'
import { jsx, css } from '@emotion/core'
import { Headline } from './Headline'
import { ParallaxBackground } from './ParallaxBackground'
import BackgroundImage from '../../assets/images/hero.jpg'

export const Hero = () => {
  return (
    <section
      css={css`
        width: 100vw;
        height: 100vh;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        //transform: translate3d(0px, 0px, 0px);
      `}
    >
      <Headline />
      <ParallaxBackground imagePath={BackgroundImage} alt='this is hero' />
    </section>
  )
}

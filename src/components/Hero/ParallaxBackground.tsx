/**@jsx jsx*/
import React, { useEffect, useState, useCallback } from 'react'
import { jsx, css } from '@emotion/core'
import InViewMonitor from 'react-inview-monitor'

type Props = {
  imagePath: string
  alt: string
}

export const ParallaxBackground = (props: Props) => {
  const [backgroundPositionY, setBackgroundPositionY] = useState<number>(0)

  const parallaxScroll = useCallback(() => {
    return setBackgroundPositionY(-window.pageYOffset)
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', parallaxScroll)
    return () => {
      document.removeEventListener('scroll', parallaxScroll)
    }
  }, [parallaxScroll])

  return (
    <section
      css={css`
        position: absolute;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        /* background: url(${props.imagePath}) no-repeat;
        background-size: 200%;
        background-position-x: 50%;
        background-position-y: ${backgroundPositionY + 'px'}; */
      `}
    >
      <img
        src={props.imagePath}
        css={css`
          width: 100vw;
          height: 100vh;
          object-fit: cover;
          transform: matrix(1, 0, 0, 1, 1, ${-backgroundPositionY});
        `}
        alt={props.alt}
      />
    </section>
  )
}

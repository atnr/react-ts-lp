/**@jsx jsx*/
import React, { useEffect, useState, useCallback, useContext } from 'react'
import { jsx, css } from '@emotion/core'
import { LoadingContext } from '../Loading/context'

type Props = {
  imagePath: string
  alt: string
}

export const ParallaxBackground = (props: Props) => {
  const [backgroundPositionY, setBackgroundPositionY] = useState<number>(0)
  const { setIsLoading } = useContext(LoadingContext)

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
        onLoad={() => setIsLoading(false)}
      />
    </section>
  )
}

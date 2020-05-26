/**@jsx jsx*/
import { jsx, css, Global } from '@emotion/core'
import React, { useContext } from 'react'
import { LoadingContext } from './context'

const scrollLock = css`
  html,
  body {
    overflow: hidden;
  }
`

export const Loading = () => {
  const { isLoading } = useContext(LoadingContext)
  return isLoading ? (
    <section
      css={css`
        html,
        body {
          overflow: hidden;
        }
        width: 100vw;
        height: 100vh;
        background: #fff;
        overflow: hidden;
        z-index: 9999;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <Global styles={scrollLock} />
      <div
        css={css`
          width: 10vw;
          height: 10vw;
          animation: rotate 1.5s linear infinite;
          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      >
        <div
          css={css`
            width: 5vw;
            height: 5vw;
            border-radius: 2.5vw;
            background: #ccc;
            position: absolute;
          `}
        />
        <div
          css={css`
            width: 3vw;
            height: 3vw;
            border-radius: 1.5vw;
            background: #ccc;
            position: absolute;
            top: 70%;
          `}
        />
        <div
          css={css`
            width: 1.8vw;
            height: 1.8vw;
            border-radius: 0.9vw;
            background: #ccc;
            position: absolute;
            top: 100%;
            right: 20%;
          `}
        />
      </div>
    </section>
  ) : null
}

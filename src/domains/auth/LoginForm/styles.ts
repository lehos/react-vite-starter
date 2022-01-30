import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Form = styled.form`
  width: 500px;
  margin: 200px auto 0 auto;
`

export const Header = styled.h1`
  margin-left: 200px;
`

export const Temp = styled.div<{ test?: boolean }>`
  color: red;

  ${(p) =>
    p.test &&
    css`
      color: green;
    `}
`

export const Text = styled.div`
  color: red;

  ${Temp} {
    color: blue;
  }
`

export const testCss = css`
  font-weight: bold;
`

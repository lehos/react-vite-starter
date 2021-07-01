// eslint-disable-next-line import/no-extraneous-dependencies
import createCache from '@emotion/cache'
import { CacheProvider, Global, css } from '@emotion/react'
import { ReactNode } from 'react'

const cache = createCache({
  key: 'react-vite-starter',
})

const globalStyles = css`
  body {
    margin: 0;
  }
`

type Props = {
  children: ReactNode
}

export function StylesProvider(props: Props) {
  const { children } = props

  return (
    <CacheProvider value={cache}>
      <Global styles={globalStyles} />
      {children}
    </CacheProvider>
  )
}

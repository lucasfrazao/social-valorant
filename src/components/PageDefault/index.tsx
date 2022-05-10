import React, { ReactNode } from 'react'
import styled, { keyframes } from 'styled-components'
import Header from '../Header'
import Footer from '../Footer'

const appearFromLeft = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

const Main = styled.main`
  width: auto;
  height: 100%;
  padding-left: 1.75rem;
  padding-top: 1.75rem;
  padding-right: 1.75rem;
  padding-bottom: 2rem;
  animation: ${appearFromLeft} 0.5s;
  overflow: auto;
  background-color: #191919;
`

interface PageDefaultProps {
  children?: ReactNode
}

const PageDefault: React.FC<PageDefaultProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main style={{ minHeight: 'calc(100vh - 6.8rem)' }}>{children}</Main>
      <Footer />
    </>
  )
}

export default PageDefault

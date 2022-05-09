import React, { ReactNode } from 'react'
import styled, { keyframes } from 'styled-components'
import Header from '../Header'
import Navbar from '../Navbar'

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
  animation: ${appearFromLeft} 0.5s;
  overflow: auto;
`

interface PageDefaultProps {
  children?: ReactNode
}

const PageDefault: React.FC<PageDefaultProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main style={{ minHeight: 'calc(100vh - 6.8rem)' }}>{children}</Main>
      <Navbar />
    </>
  )
}

export default PageDefault

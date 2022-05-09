import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { AppRoutes } from './routes'

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppRoutes />
    </BrowserRouter>
  )
}

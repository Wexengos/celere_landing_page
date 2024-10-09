import { AppRoutes } from './routes';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Body from './components/Body';

import './index.css';
import GlobalStyle from './styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Body>
        <AppRoutes />
      </Body>
    </ThemeProvider >
  )
}

export default App
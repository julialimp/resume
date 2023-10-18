import { ThemeProvider } from './contexts/theme-context';
import { AppRoutes } from './routes';
import { GlobalStyle } from './styles/global-style';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;

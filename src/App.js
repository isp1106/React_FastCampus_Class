import { ThemeProvider } from 'styled-components'
import TodoList from './components/TodoList'
import theme from './styles/theme'
import GlobalStyle from './styles/globalStyle'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TodoList />
    </ThemeProvider>
  )
}

export default App

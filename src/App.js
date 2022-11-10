import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import HomePage from './pages/HomePage';



function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <HomePage/>
    </ChakraProvider>
  )
}



export default App;

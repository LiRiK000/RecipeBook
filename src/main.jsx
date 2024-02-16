import { ChakraBaseProvider, theme } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { store } from './Store/store.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraBaseProvider theme={theme}>
        <App />
      </ChakraBaseProvider>
    </Provider>
  </React.StrictMode>,
)

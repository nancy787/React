import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Container from './components/container/Container'
import ItemContextProvider from './context/ItemContextProvider'
import { Provider } from 'react-redux'
import store from './stores/store'

function App() {

  return (
    <Provider store={store}>
      <Container>
        <Form/>
      </Container>
    </Provider>
  )
}

export default App


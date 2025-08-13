import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Container from './components/container/Container'
import ItemContextProvider from './context/ItemContextProvider'

function App() {

  return (
    <ItemContextProvider>
      <Container>
        <Form/>
      </Container>
    </ItemContextProvider>
  )
}

export default App

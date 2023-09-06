import React from 'react'
import logo from './logo.svg'
import './App.css'
import { AppProviders } from './providers/app-providers'
import { MuiMode } from './components/mui/mui-mode'
import Application from './components/application/application'
import Skills from './components/skills/skills'
function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
        <Application />
        <Skills skills={['html', 'css']} />
      </div>
    </AppProviders>
  )
}

export default App

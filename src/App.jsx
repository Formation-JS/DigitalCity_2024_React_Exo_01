import './App.css'
import Welcome from './components/welcome/welcome';

function App() {

  return (
    <>
     <Welcome name='Della' age={42} />
     <Welcome name='Zaza' age={13} />
    </>
  )
}

export default App

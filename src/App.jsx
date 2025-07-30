import { useState } from 'react'
import './App.css'
import {Link} from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to Frontend Class in KLU</h1>
      <h2>Today's topic is introduction to react</h2>
      <h3>Today's date is 23-07-2025</h3>
      <Link to="/page1">Go to Page1</Link>
      <br/><br/>
      <Link to="/page2">Go to Page2</Link>
      <br/><br/>
      <Link to="/page3">Go to Page3</Link>
      <br/><br/>
      <Link to="/page4">Go to Page4</Link>
    </>
  )
}

export default App

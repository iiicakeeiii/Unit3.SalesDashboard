import { useState } from 'react'
import PrimaryDash from "./components/PrimaryDash.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <PrimaryDash />
      </>
  )
}

export default App;

import { useState } from 'react'
import PrimaryDash from "./components/PrimaryDash.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <div className="w-screen">
              <PrimaryDash />
          </div>
      </>
  )
}

export default App;

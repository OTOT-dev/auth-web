import { RouterProvider } from 'react-router-dom'
import browserRouter from './router'

function App() {
  return (
    <div className='App'>
      <RouterProvider router={browserRouter} />
    </div>
  )
}

export default App

// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
 
import { Header } from './app/components/Header'
import { Home } from './app/view/Home'

function App() {
 
  const routeHeader = createBrowserRouter([
    {
      path: '/',
      element: <>
        <Header /> 
        <Home />
      </>
    }
  ])
  return (
    <div className='flex justify-center items-center bg-gray-200 h-screen'>

      <RouterProvider router={routeHeader}></RouterProvider>
    
    {/* <BrowserRouter>



    <Routes>
      <Route path='/' element={<Header />}/>

    </Routes>
    
    </BrowserRouter> */}
    </div>
  )
}

export default App

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
 
import { Header } from './app/components/Header'

function App() {
 

  return (
    <div className='flex justify-center items-center bg-gray-200 h-screen'>
    {/* <Header /> */}
    <BrowserRouter>
    <Link to='/'/>


    <Routes>
      <Route path='/' element={<Header />}/>

    </Routes>
    
    
    
    
    </BrowserRouter>
    </div>
  )
}

export default App

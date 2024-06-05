import { Routes, Route } from 'react-router-dom'
import Feedpage from './pages/Feed'
import Video from './pages/Video'
import CategoryPage from './pages/categoryPage'


const App = () => {
  return (
    <>
      <div className='App '>
          <Routes>
            <Route path="/" element={<Feedpage/>}/>  
            <Route path="/Video" element={<Video/>}/>  
            <Route path="/category" element={<CategoryPage/>}/>  
          </Routes>
      </div>
    </>
  )
}

export default App
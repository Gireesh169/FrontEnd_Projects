import {BrowserRouter, Routes, Route} from 'react-router-dom'

import About from './pages/About'
import Contact from './pages/Contact'
import Education from './pages/Education'


function App() {
  return (
    <BrowserRouter>
       
       
        <Routes>
          <Route index element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/education' element={<Education />} />
          <Route path='*' element={<About />} />
        </Routes>
       
    </BrowserRouter>
    
  );
}
export default App;
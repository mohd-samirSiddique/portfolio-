import './App.css'
import Sidebar from './assets/Components/Sidebar'
import Home from './assets/Components/Home'
import About from './assets/Components/About'
import Service from './assets/Components/Service'
import Portfolio from './assets/Components/Portfolio'
import Contact from './assets/Components/Contact'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
      <Sidebar/>
        <Routes>
          <Route path = '/' element = {<Home></Home>}/>
          <Route path ='/about' element = {<About></About>}/> 
          <Route path = '/service' element = {<Service></Service>}/> 
          <Route path = '/portfolio' element = {<Portfolio></Portfolio>}/>
          <Route path='contact' element = {<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

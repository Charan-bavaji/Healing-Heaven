import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className='w-full'>
      <div className='w-full'>
        <Navbar />
      </div>
      <Home />
    </div>
  )
}

export default App;
import './App.css'
import { Header } from './components/Header'
import Hero from './components/Hero'

function App() {

  return (
    <>
      {/* Fondo */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] bg-white"></div>
      
      <div className='w-full'>
        <Header/>
        <Hero/>
        {/* <Hero/>
        <Hero/> */}
        {/* <p className='text-white'>Hola</p> */}
      </div>
    </>
  )
}

export default App

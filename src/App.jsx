import React from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Analytics from './Components/Analytics'
import Newsletter from './Components/Newsletter'
import CardContainer from './Components/CardContainer'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='h-full w-full'>
     <NavBar />
     <Hero />
     <Analytics/>
     <Newsletter/>
     <CardContainer />
     <Footer />
    </div>
  )
}

export default App
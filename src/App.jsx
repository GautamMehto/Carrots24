// import React from 'react'
import Header from './Components/Header/Header'
import Section1 from './Components/Section 1/Section 1'
import Section2 from './Components/Section 2/Section 2'
import Footer from './Components/Footer/Footer'
import BackToTop from './BackToTop.svg'
import MenuTab from './Components/MenuTab/MenuTab'
import { useState } from 'react'

const App = () => {
  const [togglebtn, setTogglebtn] = useState(false);
  function display(data) {
    setTogglebtn(data)
  }
  return (
    <div className='relative'>
      <a href='#Header' className='w-full fixed z-[45] flex justify-center items-center bottom-0 left-0'>
        <img src={BackToTop} alt="" />
      </a>
      <MenuTab togglebtn={togglebtn} displayName = {display}/>
      <Header displayName={display} />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  )
}

export default App
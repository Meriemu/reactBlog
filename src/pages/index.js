import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne,homeObjTwo,homeObjThree, } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Services from '../components/ServicesSection';
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
        console.log("first : ", isOpen)
    }
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}  />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <Services />
        <InfoSection {...homeObjThree} />
        <Footer />
    </>
  )
}

export default Home
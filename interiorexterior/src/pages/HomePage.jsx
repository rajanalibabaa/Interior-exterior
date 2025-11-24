import React from 'react'
import HeroBannerWithEnquiryForm from '../components/HeroBanner'
import WhyChooseUs from '../components/WhyChoooseUs'
import AutoSlideSection from '../components/AutoSlideTeraformSection'
import ServicesSection from '../components/OurServicesSections'
import WeAre from '../components/WeAre'
import HowItWorks from '../components/HowItsWorks'
import { Typography , Box, Button} from '@mui/material'
import logo from './../assets/interiorexteriorprofilelogo.jpg'
import CenterBanner from '../components/CenterBanner'
import FAQSection from '../components/Faq'

const HomePage = () => {
  return (
 <>
 <HeroBannerWithEnquiryForm/>
  <WeAre/>

 <WhyChooseUs/>
 <ServicesSection/>
  <AutoSlideSection/>

 <CenterBanner/>
 <HowItWorks/>
 <FAQSection/>
 </>
  )
}

export default HomePage

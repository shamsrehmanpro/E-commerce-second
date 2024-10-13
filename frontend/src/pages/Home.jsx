import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection.jsx'
import BestSeller from '../components/BestSeller.jsx'
import OurPolicy from '../components/OurPolicy.jsx'
import Newsletterbox from '../components/Newsletterbox.jsx'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <Newsletterbox />
    </div>
  )
}

export default Home
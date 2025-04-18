// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import JobPosting from './components/JobPosting'
import FeaturedJobs from './components/FeaturedJobs'
import LatestJobs from './components/LatestJobs'
import Footer from './components/Footer'
// import CompanyGrow from './components/CompanyGrow'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <CompanyGrow /> */}
      <Categories />
      <JobPosting />
      <FeaturedJobs />
      <LatestJobs />
      <Footer />
    </>
  )
}

export default App

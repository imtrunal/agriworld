import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import VisitorRegistration from './pages/VisitorRegistration'
import ExhibitorsProfile from './pages/ExhibitorsProfile'
import PromotionalActivities from './pages/PromotionalActivities'
import EsteemedParticipants from './pages/EsteemedParticipants'
import VisitorsProfile from './pages/VisitorsProfile'
import AboutAgriWorldExpo from './pages/AboutAgriWorldExpo'
import AboutSparkMedia from './pages/AboutSparkMedia'
// import GlimpsesofthePast from './pages/GlimpsesofthePast'
import ContactUs from './pages/ContactUs'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/visitor-registration' element={<VisitorRegistration/>}/>
      <Route path='/exhibitors-profile' element={<ExhibitorsProfile/>}/>
      {/* <Route path='/promotional-activities' element={<PromotionalActivities/>}/> */}
      <Route path='/esteemed-participants' element={<EsteemedParticipants/>}/>
      <Route path='/visitors-profile' element={<VisitorsProfile/>}/>
      <Route path='/about' element={<AboutAgriWorldExpo/>}/>
      {/* <Route path='/about-spark-media' element={<AboutSparkMedia/>}/> */}
      {/* <Route path='/gallery' element={<GlimpsesofthePast/>}/> */}
      <Route path='/contact' element={<ContactUs/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

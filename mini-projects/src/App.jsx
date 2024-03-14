import Navbar from '../Navbar/Navbar'
import AppBirthdayBuddy from '../1-birthday buddy/AppBirthdayBuddy'
import AppTours from '../2-Tours/AppTours'
import AppReviews from '../3-Reviews/AppReviews'
import AppQuestions from '../4-Accordion/AppQuestions'
import AppMenu from '../5-Menu/AppMenu'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AppBirthdayBuddy />} />
        <Route path="/tours" element={<AppTours />} />
        <Route path="/reviews" element={<AppReviews />} />
        <Route path="/accordion" element={<AppQuestions />} />
        <Route path="/Menu" element={<AppMenu />} />
      </Routes>
    </>
  )
}

export default App

import Navbar from '../Navbar/Navbar'
import AppBirthdayBuddy from '../01-Birthday-Buddy/AppBirthdayBuddy'
import AppTours from '../02-Tours/AppTours'
import AppReviews from '../03-Reviews/AppReviews'
import AppQuestions from '../04-Accordion/AppQuestions'
import AppMenu from '../05-Menu/AppMenu'
import AppTabs from '../06-Tabs/AppTabs'
import AppSlider from '../07-Slider/AppSlider'
import AppLoremIpsum from '../08-Lorem-Ipsum/AppLoremIpsum'
import AppColorGenerator from '../09-Color-generator/AppColorGenerator'
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
        <Route path="/menu" element={<AppMenu />} />
        <Route path="/tabs" element={<AppTabs />} />
        <Route path="/slider" element={<AppSlider />} />
        <Route path="/lorem-ipsum" element={<AppLoremIpsum />} />
        <Route path="/color-generator" element={<AppColorGenerator />} />
      </Routes>
    </>
  )
}

export default App

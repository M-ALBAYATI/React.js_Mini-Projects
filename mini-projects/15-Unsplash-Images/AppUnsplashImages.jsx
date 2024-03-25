import Gallery from './Gallery'
import SearchForm from './SearchForm'
import ThemeToggle from './ThemeToggle'
import './index.css'

const AppUnsplashImages = () => {
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  )
}
export default AppUnsplashImages

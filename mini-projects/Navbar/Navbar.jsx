import { Link } from 'react-router-dom'
import './index.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="mainLink">
        <Link to="/">Birthday Buddy</Link>
        <Link to="/tours">Tours</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/accordion">Accordion</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/tabs">Tabs</Link>
        <Link to="/slider">Slider</Link>
        <Link to="/lorem-ipsum">Lorem Ipsum</Link>
        <Link to="/color-generator">Color Generator</Link>
      </div>
    </div>
  )
}
export default Navbar

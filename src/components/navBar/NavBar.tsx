import { Link } from 'react-router-dom'
import { FaUsers } from 'react-icons/fa'

import classes from './navBar.module.css'

const NavBar = () => {
  return (
    <div className={classes.routers}>
      <Link to="/community"><FaUsers /></Link>
      <Link to="/Conversations">Conversations</Link>
      <Link to="/status">status</Link>
      <Link to="/calls">calls</Link>
    </div>
  )
}

export default NavBar
import { BiCamera, BiDotsVerticalRounded, BiSearchAlt2 } from 'react-icons/bi'

import NavBar from '../navBar/NavBar'
import classes from './header.module.css'


const Header = () => {
  return (
    <div className={classes.conteiner}>
        <div className={classes.header}>
            <h1>WhatsApp</h1>
            <div className={classes.icons}>
                <BiCamera />
                <BiSearchAlt2 />
                <BiDotsVerticalRounded />
            </div>
        </div>
       <NavBar /> 
    </div>
    
  )
}

export default Header
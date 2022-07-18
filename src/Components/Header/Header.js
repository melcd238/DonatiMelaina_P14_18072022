import './Header.css';
import logo from '../../Assets/wealth.png';
import { NavLink } from 'react-router-dom';


const Header =()=>{
    let activeStyle = {
        textDecoration: "underline",
      };
    
 
    return(
        <header>
            <div className='logo-wealth'>
                <img src={logo} alt="wealth health logo"></img>
            </div>
            <div className='logo-hrnet'>
                 <span>HRnet</span>
            </div>
            <nav className='header-link'>
                <NavLink to='/' style={({ isActive }) => isActive ? activeStyle : undefined}>Home</NavLink>

                <NavLink to='employeesList'  style={({ isActive }) => isActive ? activeStyle : undefined} >Employees list</NavLink>
            </nav>
        </header>
    )
}

export default Header;
import './NotFound.css'
import logo from "../../Assets/wealth.png"
import { Link } from 'react-router-dom'

const NotFound =()=>{

    return(
        <section className='not-found'>
         <h1>Oups!!!! Something wrong happens</h1>
         <div>
             <span className='error'>404</span>
         </div>
         <div>
             <img src={logo} alt="logo wealth health"></img>
         </div>
          <Link to="/">Come back Home</Link>
        </section>
    )
}

export default NotFound
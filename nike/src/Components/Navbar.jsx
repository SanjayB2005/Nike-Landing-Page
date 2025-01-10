
import {headerLogo} from '../assets/images'
import {navLinks} from '../Constants/index'
import { hamburger } from '../assets/icons'
const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center  max-container'>
        <a href='/'>
          <img src={headerLogo} alt='Logo' width={130} height={30}/>
        </a>
        <ul className='flex  flex-1 justify-center items-center gap-16 max-lg:hidden '>
         {navLinks.map((item) => (
          <li key={item.label}>
            <a href={item.href} className='font-montserrat leading-normal text-slate-gray text-lg'>{item.label}</a>
          </li>
         ))}
         
        </ul>
        <div key="log-in" className='font-montserrat leading-normal text-black text-lg gap-2 max-lg:hidden wide:mr-24 font-medium'>
            <a href='#sign-in' >Sign in / Explore now</a>
        
        </div>
        <div className='max-lg:block hidden'>
          <img src={hamburger} alt='Hamburger' width={24} height={24}/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
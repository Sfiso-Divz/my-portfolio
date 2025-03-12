const Navbar = () => {


  return (

    // Desktop Navbar
    <div className="sticky top-0 bg-white z-50 shadow-xl w-full">
        <div className='hidden md:flex justify-between items-center max-w-[1200px] mx-auto'>
            <div className="w-24" ><a href="/#home"><img src="./assets/M (1).png" alt="logo" /></a></div>
            <ul>
                <li className='flex gap-4 text-sm'>
                    <a href="/#home" onClick={(e) => { 
    e.preventDefault();
    document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
}}>Home</a>
                    <a href="/#skills" onClick={(e) => { 
    e.preventDefault();
    document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
}}>Skills</a>
                    <a href="/#about" onClick={(e) => { 
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
}}>About</a>
                    <a href="/#contact" onClick={(e) => { 
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
}}>Contact</a>
                </li>
            </ul>
        </div>
    </div>

    // Mobile Navbar
    
  )
}

export default Navbar
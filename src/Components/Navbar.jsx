const Navbar = () => {


  return (

    // Desktop Navbar
    <div className="sticky top-0 bg-white z-50 shadow-xl w-full">
        <div className='hidden md:flex justify-between items-center max-w-[1200px] mx-auto'>
            <div className="w-24" ><a href="/#home"><img src="./assets/M (1).png" alt="logo" /></a></div>
            <ul>
                <li className='flex gap-4 text-sm'>
                    <a href="/#home">Home</a>
                    <a href="/#skills">Skills</a>
                    <a href="/#about">About</a>
                    <a href="/#contact">Contact</a>
                </li>
            </ul>
        </div>
    </div>

    // Mobile Navbar
    
  )
}

export default Navbar
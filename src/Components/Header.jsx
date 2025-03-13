import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <div id="home" >
        <div className='flex flex-col justify-center items-center h-screen text-center text-gray-700 px-6'>
            <p className='text-lg md:text-md lg:text-xl'>LETS BUILD TOGETHER</p>
            <h1 className='text-3xl md:text-3xl lg:text-5xl font-bold'>Hi, I'm <span className="text-[#5151FF] font-bold">Mfihlo</span>, Front-end Web Developer</h1>
            {/* <p className="mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nostrum harum. Dolores at placeat doloremque nam pariatur cum laudantium reiciendis?</p> */}
            <div className="flex gap-12 mt-6">
                <div className="flex flex-col justify-center items-center cursor-pointer hover:scale-105 ease-in-out duration-300">
                    <a href="https://github.com/Sfiso-Divz" className="mt-2 md:mt-4 " target="_blank"><FaGithub size={36} className="text-[#5151FF] mb-2"/> Github</a>
                </div>
                <div className="flex flex-col justify-center items-center cursor-pointer hover:scale-105 ease-in-out duration-300">
                     
                    <a href="https://x.com/Sfiso_Divz" className="mt-2 md:mt-4 " target="_blank"><FaTwitter size={36} className="text-[#5151FF] mb-2"/>Twitter</a>
                </div>
                <div className="flex flex-col justify-center items-center cursor-pointer hover:scale-105 ease-in-out duration-300">
                    
                    <a href="https://www.linkedin.com/in/mfihlo-dlamini-7193092a3/" className="mt-2 md:mt-4 " target="_blank"><FaLinkedin size={36} className="text-[#5151FF] mb-2"/> LinkedIn</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
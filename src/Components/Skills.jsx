const Skills = () => {
  return (
    <div id="skills" className="h-screen">
        <div className="md:pt-12 px-6">
          <h1 className="md:mt-24 text-xl md:text-2xl font-bold text-[#5151FF] flex items-center gap-6"><div className="h-[45px] w-[5px] bg-[#5151FF] " /> My Skills</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 md:mt-24">
            <div className="flex items-center justify-around py-4 px-6 space-x-24 shadow-2xl mt-12 hover:scale-105 ease-in-outduration-300">
                <img src="./assets/html.png" alt="html"  className="w-12"/>
                <p className="font-bold text-sm md:text-md">HTML</p>
            </div>
            <div className="flex items-center justify-around py-4 px-6 space-x-24 shadow-2xl mt-12 hover:scale-105 ease-in-out duration-300">
                <img src="./assets/css.png" alt="css"  className="w-12"/>
                <p className="font-bold text-sm md:text-md">CSS</p>
            </div>
            <div className="flex items-center justify-around py-4 px-6 space-x-24 shadow-2xl mt-12 hover:scale-105 ease-in-out duration-300">
                <img src="./assets/javascript.png" alt="javascript"  className="w-12"/>
                <p className="font-bold text-sm md:text-md">Javascript</p>
            </div>
            <div className="flex items-center justify-around py-4 px-6 space-x-24 shadow-2xl mt-12 hover:scale-105 ease-in-out duration-300">
                <img src="./assets/nextjs.png" alt="nextjs"  className="w-12"/>
                <p className="font-bold text-sm md:text-md">NextJS</p>
            </div>
            <div className="flex items-center justify-around py-4 px-6 space-x-24 shadow-2xl mt-12 hover:scale-105 ease-in-out duration-300">
                <img src="./assets/react.png" alt="react"  className="w-12"/>
                <p className="font-bold text-sm md:text-md">React</p>
            </div>
            <div className="flex items-center justify-around py-4 px-6 space-x-24 shadow-2xl mt-12 hover:scale-105 ease-in-out duration-300">
                <img src="./assets/tailwind.png" alt="tailwindcss"  className="w-12"/>
                <p className="font-bold text-sm md:text-md">TailwindCss</p>
            </div>
            <div className="flex items-center justify-around py-4 px-6 space-x-24 shadow-2xl mt-12 hover:scale-105 ease-in-out duration-300">
                <img src="./assets/mongo.png" alt="mongodb"  className="w-12"/>
                <p className="font-bold text-sm md:text-md">MongoDB</p>
            </div>
            <div className="flex items-center justify-around py-4 px-6 space-x-24 shadow-2xl mt-12 hover:scale-105 ease-in-out duration-300">
                <img src="./assets/node.png" alt="nodejs"  className="w-12"/>
                <p className="font-bold text-sm md:text-md ">NodeJs</p>
            </div>
            <div className="flex items-center justify-around py-4 px-6 space-x-24 shadow-2xl mt-12 hover:scale-105 ease-in-out duration-300">
                <img src="./assets/firebase.png" alt="firebase"  className="w-12"/>
                <p className="font-bold text-sm md:text-md">Firebase</p>
            </div>
            <div className="flex items-center justify-around py-4 px-6 space-x-24 shadow-2xl mt-12 hover:scale-105 ease-in-out duration-300">
                <img src="./assets/github1.png" alt="github"  className="w-12"/>
                <p className="font-bold text-sm md:text-md">Github</p>
            </div>
            
          </div> 
        </div>
    </div>
  )
}

export default Skills
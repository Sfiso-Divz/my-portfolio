
const About = () => {
    return (
      <div id="about" className="h-screen w-full mt-230 md:mt-4 px-6">
          <h1 className="md:pt-32 text-xl md:text-2xl font-bold text-[#5151FF] flex items-center gap-6"><div className="h-[45px] w-[5px] bg-[#5151FF] " />About</h1>
  
          <div className="flex justify-center items-center">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:mt-24 w-full">
             <div className="flex justify-center items-center gap-12 mt-12 md:mt-4">
                  <img src="./assets/me-removebg-preview.png" alt="profile-pic" />
              </div>
              
              <div className="grid  grid-cols-1 grid-rows-4 md:grid-cols-4 w-full">
              
                  <div className="cols-span-2 md:col-span-4 py-2 px-4 shadow-2xl mb-12 bg-[#5151FF] text-white rounded-sm">
                      <p className="text-sm"><span className="font-bold">2017</span>: Matriculated at Kgadime Matsepe Secondary </p>
                  </div>
                  <div className="cols-span-1 md:col-span-4 py-2 px-4 shadow-2xl mb-12  bg-[#5151FF] text-white rounded-sm">
                      <p className="text-sm"><span className="font-bold">2021</span>: Graduated from Tshwane University of Technology in Credit Management </p>
                  </div>
                  <div className="cols-span-1 md:col-span-4 row-span-4 py-2 px-4 shadow-2xl  bg-[#5151FF] text-white rounded-sm flex items-center">
                      <p className="text-sm">In 2022 I decided to start learning IT related content from YouTube and other platforms like W3School, I watched different contents where different technologies were used to build Apps. Today I have learnt alot of ways to do certain things to add functionality to websites and wish to sharpen my skills even more.</p>
                  </div>
                  
              </div>
             </div>
             
          </div>
          <div className="text-center mt-12">
                  {/* <button className=" border-2 border-[#5151FF] hover:bg-[#5151FF] text-[#5151FF] hover:text-white cursor-pointer py-4 px-12 rounded-sm mt-12 "><a href="../public/assets/mfihlocv.pdf" download> <div className="flex items-center justify-center gap-4">Download Cv <FaCloudArrowUp size={30}/></div></a></button> */}
          </div>
      </div>
    )
  }
  
  export default About
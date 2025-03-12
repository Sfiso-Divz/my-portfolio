import { useState } from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);
    
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      setStatus("Message sent successfully!");
      e.target.reset(); // Clear form after submission
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div id="contact" className="h-screen">
      <div className="mt-12">
        <h1 className="md:pt-24 text-xl md:text-2xl font-bold text-[#5151FF] flex items-center gap-6">
          <div className="h-[45px] w-[5px] bg-[#5151FF]" />
          Contact
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 md:mt-24">
          <div>
            <img src="/assets/laptop.jpg" alt="laptop" className="w-[500px]" />
            <p className="mt-6 font-bold text-lg md:text-2xl text-gray-600">Mfihlo Dlamini</p>
            <p className="text-lg md:text-xl text-gray-600">Front End Web Developer</p>
            <div className="flex mt-8 gap-8 text-gray-600">
              <div className="flex flex-col justify-center items-center cursor-pointer">
                <a href="https://github.com/Sfiso-Divz" className="mt-2 md:mt-4"><FaGithub size={24} className="text-[#5151FF] mb-2" />Github</a>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer">
                <a href="https://x.com/Sfiso_Divz" className="mt-2 md:mt-4"><FaTwitter size={24} className="text-[#5151FF] mb-2" />Twitter</a>
              </div>
              <div className="flex flex-col justify-center items-center cursor-pointer">
                <a href="https://www.linkedin.com/in/mfihlo-dlamini-7193092a3/" className="mt-2 md:mt-4"><FaLinkedin size={24} className="text-[#5151FF] mb-2" />LinkedIn</a>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input type="hidden" name="access_key" value="2d45d69a-f6c8-4a8f-a0b9-fa8b1a13c364" />
              <input type="text" name="name" placeholder="Name" required className="border-2 border-gray-400 outline-none mb-6 py-4 px-2 rounded-sm" />
              <input type="email" name="email" placeholder="Email" required className="border-2 border-gray-400 outline-none mb-6 py-4 px-2 rounded-sm" />
              <textarea name="message" cols="30" rows="10" required className="p-2 border-2 border-gray-400 outline-none rounded-sm" placeholder="Message"></textarea>
              <button type="submit" className="bg-[#5151FF] text-white py-4 px-12 rounded-sm mt-12">Send Message</button>
            </form>
            {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-24 pb-8">
        <a href="#home">
          <FaArrowUp size={56} className="text-white bg-[#5151FF] cursor-pointer p-4 rounded-full" />
        </a>
      </div>
    </div>
  );
};

export default Contact;

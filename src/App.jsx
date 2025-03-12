import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/footer"
import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
import Skills from "./Components/Skills"

function App() {

  return (
    <>
      <Navbar />
      <div className="max-w-[1440px] mx-auto">
        <Header />
        <Skills />
        <About />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App

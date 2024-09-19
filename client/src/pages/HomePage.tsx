import Experience from "./Experience"
import Hero from "./Hero"
import Mission from "./Mission"
import Newsletter from "./Newsletter"
import Services from "./Services"
import Unlock from "./Unlock"


const HomePage = () => {
  return (
    <div>
      <Hero />
      <Unlock />
      <Services />
      <Mission />
      <Experience />
      <Newsletter />
    </div>
  )
}

export default HomePage
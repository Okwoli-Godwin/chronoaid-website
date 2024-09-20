import img from "../assets/CHRONOAID LOGO (BLUE)-01 1.png"
import { Button } from "../components/ui/button"

const Experience = () => {
  return (
    <div className="w-[100%] mt-[70px] bg-[#F9FAFB] h-[100%] pt-[40px] pb-[40px] flex justify-center">
        <div className="w-[90%] flex flex-col items-center">
            <img src={img} alt="" className="w-[60px]"/>
            <h3 className="text-[25px] sm:text-[23px] xsm:text-[23px] mt-[10px] font-[600]">
                Experience ChronoAid AI Today
            </h3>
            <div className="flex sm:w-[100%] xsm:w-[100%] items-center mt-[30px] sm:flex-col-reverse xsm:flex-col-reverse sm:flex-wrap xsm:flex-wrap">
                <Button className="bg-[#fff] sm:w-[100%] xsm:w-[100%] rounded-full border border-[D0D5DD] hover:bg-transparent">Book a demo</Button>
                <Button className="bg-custom-gradient sm:w-[100%] xsm:w-[100%] text-[#fff] rounded-full ml-[10px] sm:ml-[0px] xsm:ml-[0px] sm:mb-[10px] xsm:mb-[10px]">Start for free</Button>
          </div>
        </div>
    </div>
  )
}

export default Experience
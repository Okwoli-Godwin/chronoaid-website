import { Button } from "../components/ui/button"
import img from "../assets/Image (2).png"

const Mission = () => {
  return (
    <div className="w-[100%] mt-[70px] sm:mt-[50px] xsm:mt-[50px] flex justify-center">
        <div className="w-[90%] flex justify-between md:flex-wrap sm:flex-wrap xsm:flex-wrap">
            <div className="w-[60%] md:w-[100%] sm:w-[100%] xsm:w-[100%] flex flex-col">
                <h4 className="text-[14px] font-[600] text-[#086593]">
                    Our mission
                </h4>
                <h3 className="text-[25px] sm:text-[23px] xsm:text-[23px] font-[700]">
                    Empowering Clinicians for Superior Patient-Centered Healthcare.
                </h3>
                <p className="text-[16px] font-[400] text-[#475467] mt-[20px]">
                    ChronoAid AI’s mission is to empower clinicians with the data and tools needed to make better clinical decisions, 
                    improve patient care, and streamline healthcare workflows
                </p>
                <p className="text-[16px] font-[400] text-[#475467] mt-[20px]">
                    Our ultimate goal is to build a more efficient, effective, and patient-centered healthcare 
                    system that delivers superior outcomes across the board
                </p>

                <Button className="bg-[#fff] rounded-full border border-[#D0D5DD] w-[180px] sm:w-[100%] xsm:w-[100%] md:w-[100%] mt-[30px]">Get to know us</Button>
            </div>

            <div className="w-[36%] h-[300px] md:h-[350px] sm:mt-[12px] xsm:mt-[18px] md:mt-[12px] sm:w-[100%] xsm:w-[100%] md:w-[100%]">
                <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
            </div>
        </div>
    </div>
  )
}

export default Mission
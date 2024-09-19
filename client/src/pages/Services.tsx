import img from "../assets/Featured icon (1).png"
import img2 from "../assets/Featured icon (2).png"
import img3 from "../assets/Featured icon (3).png"

const Services = () => {
  return (
    <div className="w-[100%] mt-[70px] bg-[#F9FAFB] h-[100%] pt-[40px] pb-[40px] flex justify-center">
        <div className="w-[90%] flex flex-col items-center">
            <h4 className="text-[14px] font-[600] text-[#086593]">
                Additional Services
            </h4>
            <h3 className="text-[25px] sm:text-[23px] xsm:text-[23px] font-[700]">
                Enhance Your Care Delivery
            </h3>
            <p className="text-[16px] font-[400] text-[#475467] sm:text-center xsm:text-center mt-[5px]">
                Explore more ways ChronoAid AI can support your healthcare practice.
            </p>

            <div className="w-[80%] md:w-[100%] sm:w-[100%] xsm:w-[100%] flex items-center mt-[100px] sm:mt-[70px] xsm:mt-[70px] justify-between md:flex-wrap sm:flex-wrap xsm:flex-wrap">
                <div className="flex flex-col items-center sm:w-[100%] xsm:w-[100%]">
                    <img src={img} alt="" className="h-[50px]"/>
                    <h3 className="text-[17px] font-[600] mt-[6px]">
                        Order IoMT Devices
                    </h3>
                    <p className="text-[15px] font-[400] mt-[5px] w-[300px] text-center">
                        Purchase compatible devices for real-time monitoring.
                    </p>
                </div>
                <div className="flex flex-col items-center sm:w-[100%] xsm:w-[100%] sm:mt-[22px] xsm:mt-[32px]">
                    <img src={img2} alt="" className="h-[50px]"/>
                    <h3 className="text-[17px] font-[600] mt-[6px]">
                        Schedule Home Care Visits
                    </h3>
                    <p className="text-[15px] font-[400] mt-[5px] w-[300px] text-center">
                        Seamless booking for home care and wellness services
                    </p>
                </div>
                <div className="flex flex-col items-center md:ml-[200px] md:mt-[20px] sm:w-[100%] xsm:w-[100%] sm:mt-[22px] xsm:mt-[32px]">
                    <img src={img3} alt="" className="h-[50px]"/>
                    <h3 className="text-[17px] font-[600] mt-[6px]">
                        Medication Review
                    </h3>
                    <p className="text-[15px] font-[400] mt-[5px] w-[300px] text-center">
                        Request AI-powered medication evaluations for patients.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
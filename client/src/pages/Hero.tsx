import { Button } from "../components/ui/button";
import img from "../assets/Image.png"
import img2 from "../assets/Image (1).png"
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div
        className="w-full h-[100%] bg-background bg-no-repeat bg-center flex justify-center items-center pt-[150px] sm:pt-[140px] xsm:pt-[140px]">
        <div className="w-[90%] flex justify-center items-center flex-col">
          <h1 className="w-[55%] md:w-[80%] sm:w-[80%] xsm:w-[80%] text-[38px] sm:text-[30px] xsm:text-[28px] font-[700] text-center">
            Empowering Healthcare with Intelligent AI Solutions
          </h1>
          <p className="text-sm xsm:text-[17px] w-[55%] sm:w-[90%] xsm:w-[90%] md:w-[80%] text-center mt-[20px] font-[400] text-[#475467]">
            Streamline clinical workflows, enhance patient care, and make better-informed decisions with ChronoAid AI.
          </p>

          <div className="flex sm:w-[100%] xsm:w-[100%] items-center mt-[30px] sm:flex-col-reverse xsm:flex-col-reverse sm:flex-wrap xsm:flex-wrap">
            <Button onClick={() => navigate("/bookademo")} className="bg-[#fff] sm:w-[100%] xsm:w-[100%] rounded-full border border-[#D0D5DD] hover:bg-transparent">Book a demo</Button>
            <Button className="bg-custom-gradient sm:w-[100%] xsm:w-[100%] text-[#fff] rounded-full ml-[10px] sm:ml-[0px] xsm:ml-[0px] sm:mb-[10px] xsm:mb-[10px]">Start for free</Button>
          </div>

          <div className="w-[100%] h-[380px] mt-[40px]">
            <img src={img} alt="" className="w-[100%] h-[100%] object-cover sm:hidden xsm:hidden"/>
            <img src={img2} alt="" className="w-[100%] h-[100%] object-cover hidden sm:flex xsm:flex"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

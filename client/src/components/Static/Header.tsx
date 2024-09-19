import { Button } from "../ui/button"
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import img from "../../assets/CHRONOAID LOGO (BLUE)-01 1.png"
import { useState } from "react";

const Header = () => {

  const [scroll, setScroll] = useState<Boolean>(false)

  const changeHeaderColor = () => {
    if(window.scrollY >= 50) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  window.addEventListener("scroll", changeHeaderColor)

  const navigate = useNavigate()
  return (
    <>
      {scroll ? (
        <div className="w-[100%] h-[70px] bg-white border-b border-[#adadad] transition duration-500 ease-in-out flex justify-center fixed">
        <div className="w-[90%] flex items-center justify-between">
          <img onClick={() => {navigate("/")}} src={img} alt="logo" className="cursor-pointer"/>
  
          <div className="flex items-center md:hidden sm:hidden xsm:hidden">
            <nav onClick={() => {navigate("/whoweare")}} className="text-sm font-[600] ml-[40px] cursor-pointer">Who we are</nav>
            <nav onClick={() => {navigate("/aboutus")}} className="text-sm font-[600] ml-[40px] cursor-pointer">About us</nav>
            <nav onClick={() => {navigate("/contactus")}} className="text-sm font-[600] ml-[40px] cursor-pointer">Contact us</nav>
            <Button onClick={() => {navigate("/startforfree")}} className="bg-custom-gradient rounded-full text-white ml-[40px]">Start for free</Button>
          </div>
  
          <FiMenu className="text-[23px] cursor-default hidden md:flex sm:flex xsm:flex"/>
        </div>
      </div>
      ) : (
        <div className="w-[100%] h-[70px] bg- flex justify-center fixed">
      <div className="w-[90%] flex items-center justify-between">
        <img onClick={() => {navigate("/")}} src={img} alt="logo" className="cursor-pointer"/>

        <div className="flex items-center md:hidden sm:hidden xsm:hidden">
          <nav onClick={() => {navigate("/whoweare")}} className="text-sm font-[600] ml-[40px] cursor-pointer">Who we are</nav>
          <nav onClick={() => {navigate("/aboutus")}} className="text-sm font-[600] ml-[40px] cursor-pointer">About us</nav>
          <nav onClick={() => {navigate("/contactus")}} className="text-sm font-[600] ml-[40px] cursor-pointer">Contact us</nav>
          <Button onClick={() => {navigate("/startforfree")}} className="bg-custom-gradient rounded-full text-white ml-[40px]">Start for free</Button>
        </div>

        <FiMenu className="text-[23px] cursor-default hidden md:flex sm:flex xsm:flex"/>
      </div>
    </div>
      )}
    </>
  )
}

export default Header
import { Button } from "../ui/button"
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate()
  return (
    <div className="w-[100%] h-[70px] bg- flex justify-center">
      <div className="w-[90%] flex items-center justify-between">
        <img src="" alt="logo" />

        <div className="flex items-center md:hidden sm:hidden xsm:hidden">
          <nav onClick={() => {navigate("/whoweare")}} className="text-sm font-[600] ml-[40px] cursor-pointer">Who we are</nav>
          <nav onClick={() => {navigate("/aboutus")}} className="text-sm font-[600] ml-[40px] cursor-pointer">About us</nav>
          <nav onClick={() => {navigate("/contactus")}} className="text-sm font-[600] ml-[40px] cursor-pointer">Contact us</nav>
          <Button onClick={() => {navigate("/startforfree")}} className="bg-custom-gradient rounded-full text-white ml-[40px]">Start for free</Button>
        </div>

        <FiMenu className="text-[23px] cursor-default hidden md:flex sm:flex xsm:flex"/>
      </div>
    </div>
  )
}

export default Header
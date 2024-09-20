import logo from "../../assets/logo-white.png"

const Footer = () => {
  return (
    <section className="h-[100%] bg-[#032637] p-12 sm:pl-[0px] sm:pr-[0px] xsm:pr-[0px] xsm:pl-[0px] mt-[50px] flex justify-center">
       <div className="flex w-[90%] flex-col justify-center items-center sm:items-start xsm:items-start">
         <img src={logo} alt='chronoAid Ai' />
         <div className='flex flex-row space-x-[30px] mt-8 sm:flex-col xsm:flex-col sm:space-x-[0px] sm:space-y-[15px] xsm:space-x-[0px] xsm:space-y-[15px]'>
          <p className="text-[16px] font-semibold leading-[24px] text-[#EAECF0]" >About</p>
          <p className="text-[16px] font-semibold leading-[24px] text-[#EAECF0]">Contact Us</p>
          <p className="text-[16px] font-semibold leading-[24px] text-[#EAECF0]">Who we are</p>
         </div>

         <div className="w-[100%] h-[1px] bg-[#555555] mt-[40px]"></div>

         <div className="w-[100%] flex items-center justify-between mt-[20px] sm:flex-wrap xsm:flex-wrap sm:flex-col-reverse xsm:flex-col-reverse
         sm:items-start xsm:items-start">
          <p className="text-[#D0D5DD] sm:mt-[10px] xsm:mt-[10px] text-[14px] font-[600] sm:w-[100%] xsm:w-[100%]">© 2024 ChronoAid AI. All rights reserved.</p>
          <div className='flex flex-row space-x-[30px]'>
          <p className="text-[14px] font-semibold leading-[24px] text-[#D0D5DD]" >Terms</p>
          <p className="text-[14px] font-semibold leading-[24px] text-[#D0D5DD]">Privacy</p>
          <p className="text-[14px] font-semibold leading-[24px] text-[#D0D5DD]">Cookies</p>
         </div>
         </div>
       </div>

    </section>
  )
}

export default Footer
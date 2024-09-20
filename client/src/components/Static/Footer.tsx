import logo from "../../assets/logo-white.png"

const Footer = () => {
  return (
    <section className="h-[250px] bg-[#032637] p-12 mt-[50px]">
       <div className="flex flex-col justify-center items-center">
         <img src={logo} alt='chronoAid Ai' />
         <div className='flex flex-row space-x-3 mt-8'>
          <p className="text-[16px] font-semibold leading-[24px] text-[#EAECF0]" >About</p>
          <p className="text-[16px] font-semibold leading-[24px] text-[#EAECF0]">Contact Us</p>
          <p className="text-[16px] font-semibold leading-[24px] text-[#EAECF0]">Who we are</p>
         </div>
       </div>

    </section>
  )
}

export default Footer
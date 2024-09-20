import { Button } from "../components/ui/button"

const Newsletter = () => {
  return (
    <div className="w-[100%] flex justify-center mt-[70px] sm:mt-[50px] xsm:mt-[50px]">
        <div className="w-[90%] flex pl-[40px] sm:p-[0px] xsm:p-[0px] pr-[40px] pt-[40px] pb-[40px] rounded-[10px] bg-[#F9FAFB] justify-between md:flex-wrap 
        sm:flex-wrap xsm:flex-wrap md:justify-between sm:justify-center xsm:justify-center"
        >
            <div className="flex flex-col md:w-[100%] sm:w-[100%] xsm:w-[100%] md:items-center sm:items-center xsm:items-center">
                <h3 className="text-[23px] font-[700]">
                    Join Our Newsletter
                </h3>
                <p className="text-[16px] font-[400] mt-[5px] sm:text-center xsm:text-center">
                    Stay in the loop with everything you need to know.
                </p>
            </div>
            <div className="flex flex-col md:w-[100%] sm:w-[100%] xsm:w-[100%] md:items-center sm:items-center xsm:items-center md:mt-[25px]
            sm:flex-wrap xsm:flex-wrap sm:mt-[30px] xsm:mt-[28px]">
                <div className="flex items-center sm:w-[100%] xsm:w-[100%] sm:flex-wrap xsm:flex-wrap">
                    <input type="email" placeholder="Enter your email" 
                    className="w-[250px] sm:w-[100%] xsm:w-[100%] pl-[10px] pr-[10px] h-[40px] border border-[gray] rounded-md outline-none"
                    />
                    <Button className="bg-custom-gradient sm:w-[100%] sm:mt-[12px] xsm:mt-[12px] xsm:w-[100%] text-[#fff] rounded-full ml-[10px] sm:ml-[0px] xsm:ml-[0px] sm:mb-[10px] xsm:mb-[10px]">Subscribe</Button>
                </div>
                <p className="text-[13px] font-[400] sm:text-center xsm:text-center mt-[5px]">
                    We care about your data in our privacy policy.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
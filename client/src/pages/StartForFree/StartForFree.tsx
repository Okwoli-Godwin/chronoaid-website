
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

const StartForFree = () => {
  return (
    <div className="w-[100%] flex justify-center pt-[170px] sm:pt-[150px] xsm:pt-[150px]">
      <div className="w-[30%] md:w-[70%] sm:w-[90%] xsm:w-[90%] flex flex-col items-center">
        <h1 className='text-[25px] sm:text-[23px] xsm:text-[23px] mt-[10px] font-[700]'>
          Create an account
        </h1>
        <p className='text-[17px] font-[400] mt-[8px]'>
          Start your 30-day free trial.
        </p>

        <form className='w-[100%] mt-[50px] flex flex-col'>
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center sm:text-[16px] xsm:text-[16px]">
              Name
              <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input id="name" placeholder="Enter your name" required />
          </div>
          <div className="space-y-2 mt-[18px]">
            <Label htmlFor="email" className="flex items-center sm:text-[16px] xsm:text-[16px]">
              Email
              <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>
          <div className="space-y-2 mt-[18px]">
            <Label htmlFor="organization" className="sm:text-[16px] xsm:text-[16px]">Organization <span className='text-[14px]'>(Optional)</span></Label>
            <Input id="organization" placeholder="Enter your organization name" />
          </div>
          <div className="space-y-2 mt-[18px]">
            <Label htmlFor="message" className="sm:text-[16px] xsm:text-[16px]">Message</Label>
            <Textarea id="message" placeholder="Tell us your needs..." className="min-h-[100px] resize-none" />
          </div>
          <Button className='w-[100%] rounded-full bg-custom-gradient mt-[18px] text-white'>Start my free trial</Button>
          <div className='w-[100%] flex justify-center mt-[18px]'>
            <h3 className='text-[14px] font-[600]'>OR</h3>
          </div>
          <Button className='w-[100%] sm:text-[15px] xsm:text-[15px] hover:bg-transparent bg-white border border-[#D0D5DD] rounded-full mt-[18px]'>
            <span className='mr-[8px]'><FcGoogle /></span>
            Sign up with Google
          </Button>
          <Button className='w-[100%] sm:text-[15px] xsm:text-[15px] hover:bg-transparent bg-white border border-[#D0D5DD] rounded-full mt-[18px]'>
            <span className='mr-[8px] text-[#1877F2]'><BsFacebook /></span>
            Sign up with Facebook
          </Button>

          <div className="mt-[22px] w-[100%] flex justify-center">
            <h5 className="text-[14px] font-[400]">Already have an account? <span className="text-[14px] cursor-pointer font-[600] text-[#086593]">Log in</span></h5>
          </div>
        </form>
      </div>
    </div>
  )
}

export default StartForFree
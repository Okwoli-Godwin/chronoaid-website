'use client'
import React from 'react'
import { useState } from 'react'
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Checkbox } from "../../components/ui/checkbox"
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Link } from 'react-router-dom'
import img from "../../assets/doc.jpeg"

const CustomInput = React.forwardRef((props, ref: any) => {
  return (
    <input
      {...props}
      ref={ref}
      className="w-full h-10 px-3 py-2 outline-none"
    />
  )
})

const ContactUs = () => {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>("")
  const [agreedToPolicy, setAgreedToPolicy] = useState(false)

  return (
    <div className='w-[100%] pt-[150px] sm:pt-[140px] xsm:pt-[140px] flex justify-center'>
      <div className='w-[90%] flex justify-between pl-[100px] md:pl-[0px] sm:pl-[0px] xsm:pl-[0px]'>
        <div className='w-[45%] flex flex-col md:w-[100%] sm:w-[100%] xsm:w-[100%]'>
          <h1 className='text-[25px] sm:text-[23px] xsm:text-[23px] mt-[10px] font-[600]'>
            Get in touch
          </h1>
          <p className='text-[17px] font-[400] mt-[10px]'>
            Our friendly team would love to hear from you.
          </p>

          <form className='w-[100%] mt-[50px] flex flex-col'>
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-1 xsm:grid-cols-1'>
              <div className='space-y-2'>
                <Label htmlFor='firstName' className='font-[500] sm:text-[16px] xsm:text-[16px]'>First Name</Label>
                <Input id='firstName' placeholder='First name' required/>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='lastName' className='font-[500] sm:text-[16px] xsm:text-[16px'>Last Name</Label>
                <Input id='lastName' placeholder='Last name' required/>
              </div>
            </div>
            <div className='space-y-2 mt-[18px]'>
              <Label htmlFor='email' className='font-[500] sm:text-[16px] xsm:text-[16px'>Email</Label>
              <Input id='email' type='email' placeholder='you@company.com' required/>
            </div>
            <div className='space-y-2 mt-[18px]'>
              <Label htmlFor='phone' className='sm:text-[16px] xsm:text-[16px'>Phone Number</Label>
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry='US'
                value={phoneNumber}
                onChange={(value) => setPhoneNumber(value)}
                inputComponent={CustomInput}
                className='w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm placeholder:text-muted-foreground overflow-hidden focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
              />
            </div>
            <div className='space-y-2 mt-[18px]'>
              <Label htmlFor='message' className='sm:text-[16px] xsm:text-[16px]'>Message</Label>
              <Textarea id="message" placeholder="Leave us a message" className="min-h-[100px] resize-none" required/>
            </div>
            <div className="flex items-center space-x-2 mt-[18px]">
              <Checkbox 
                id="privacy-policy" 
                checked={agreedToPolicy}
                onCheckedChange={(checked: any) => setAgreedToPolicy(checked as boolean)}
              />
              <Label htmlFor="privacy-policy" className="text-[15px] font-[400] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                You agree to our{' '}
                <Link to="" className="text-primary hover:underline text-[15px] font-[400]">
                  friendly privacy policy
                </Link>
              </Label>
            </div>
            <Button type="submit" className="w-full mt-[18px] bg-custom-gradient rounded-full text-white" disabled={!agreedToPolicy}>Send Message</Button>
          </form>
        </div>

        <div className='w-[50%] h-[630px] overflow-hidden md:hidden sm:hidden xsm:hidden'>
          <img src={img} alt="image" className='w-[100%] h-[100%] object-cover'/>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
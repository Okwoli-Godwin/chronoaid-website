import img from "../assets/Featured icon.png"

const Unlock = () => {
  return (
    <div className="w-[100%] flex justify-center pt-[70px] sm:pt-[50px] xsm:pt-[50px]">
        <div className="w-[90%] flex justify-between md:flex-wrap sm:flex-wrap xsm:flex-wrap">
            <div className="flex flex-col w-[30%] md:w-[100%] sm:w-[100%] xsm:w-[100%] md:mb-[40px] sm:mb-[40px] xsm:mb-[35px]">
                <img src={img} alt="" className="w-[50px]"/>
                <h3 className="text-[25px] font-[700]">
                    Unlock the Power of AI-Driven Healthcare
                </h3>
                <p className="text-[17px] sm:text-[16px] xsm:text-[16px] font-[400] mt-[10px] text-[#475467]">
                    ChronoAid AI is designed to simplify complex clinical tasks and 
                    provide healthcare providers with reliable, data-driven insights. Here's how our
                    platform can transform your day-to-day operations and elevate patient care
                </p>
            </div>

            <div className="flex-col flex w-[30%] md:w-[100%] sm:w-[100%] xsm:w-[100%]">
                <div className="w-[100%] flex flex-col">
                    <h4 className="text-[18px] font-[700]">
                        AI-Driven Clinical Insights
                    </h4>
                    <p className="text-[15px] font-[400] mt-[8px] text-[#475467]">
                        It identifies patterns and correlations that may not be immediately 
                        obvious to the human eye. This ensures that clinicians can make better, data-backed decisions, 
                        helping them diagnose and treat patients more accurately.
                    </p>
                </div>
                <div className="w-[100%] flex flex-col mt-[15px]">
                    <h4 className="text-[18px] font-[700]">
                        Seamless Integration
                    </h4>
                    <p className="text-[15px] font-[400] mt-[8px] text-[#475467]">
                        No need to overhaul your current setup. ChronoAid AI works with 
                        the technology you’re already using, so you don’t 
                        have to worry about complicated installations or data migrations.
                    </p>
                </div>
                <div className="w-[100%] flex flex-col mt-[15px]">
                    <h4 className="text-[18px] font-[700]">
                        Real-time Monitoring
                    </h4>
                    <p className="text-[15px] font-[400] mt-[8px] text-[#475467]">
                        Devices like blood pressure monitors, glucose meters, and heart rate 
                        trackers can feed data into the platform, allowing 
                        healthcare providers to monitor patients remotely or in a clinical setting.
                    </p>
                </div>
            </div>

            <div className="flex-col flex w-[30%] md:w-[100%] md:mt-[15px] sm:w-[100%] xsm:w-[100%] sm:mt-[15px] xsm:mt-[15px]">
                <div className="w-[100%] flex flex-col">
                    <h4 className="text-[18px] font-[700]">
                        Personalized Patient Care
                    </h4>
                    <p className="text-[15px] font-[400] mt-[8px] text-[#475467]">
                        The platform helps tailor treatment plans to each individual, moving 
                        away from "one-size-fits-all" approaches. 
                        This includes medication adjustments, lifestyle changes, and follow-up schedules.
                    </p>
                </div>
                <div className="w-[100%] flex flex-col mt-[15px]">
                    <h4 className="text-[18px] font-[700]">
                        Easy-to-Use Dashboard
                    </h4>
                    <p className="text-[15px] font-[400] mt-[8px] text-[#475467]">
                        Even if you're not tech-savvy, you’ll find the user interface easy 
                        to understand. The dashboard is organized to provide quick access to patient data, 
                        AI-generated insights, and alerts in an uncomplicated way.
                    </p>
                </div>
                <div className="w-[100%] flex flex-col mt-[15px]">
                    <h4 className="text-[18px] font-[700]">
                        Compliance & Data Security
                    </h4>
                    <p className="text-[15px] font-[400] mt-[8px] text-[#475467]">
                        Your patients’ sensitive health data is kept safe from unauthorized access. 
                        The platform follows industry best practices to comply 
                        with data protection regulations, so you can have peace of mind.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Unlock
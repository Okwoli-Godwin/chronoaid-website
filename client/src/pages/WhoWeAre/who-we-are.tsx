import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

const WhoWeAreAndWhatWeAre = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section>
        <div>
          <div className="flex bg-[#F9FAFB] justify-center items-center py-[150px] sm:pt-[140px] xsm:pt-[140px]">
            <div className="w-[90%] flex justify-center items-center flex-col">
              <p className="text-[16px] font-semibold  leading-[24px] text-bluePrimary">
                Who we are & Who we serve
              </p>
              <h1 className="w-[55%] md:w-[80%] sm:w-[80%] xsm:w-[80%] text-[38px] sm:text-[30px] xsm:text-[28px] font-[700] text-center">
                Empowering Healthcare Providers, Insurers, and Communities
                Through Data-Driven Chronic Disease Management.
              </h1>
              <p className="text-sm xsm:text-[17px] w-[55%] sm:w-[90%] xsm:w-[90%] md:w-[80%] text-center mt-[20px] font-[400] text-[#475467]">
                ChronoAid AI is dedicated to transforming chronic disease
                management by supporting a broad range of healthcare providers,
                insurers, and community organizations.
              </p>

              <div className="flex sm:w-[100%] xsm:w-[100%] items-center mt-[30px] sm:flex-col-reverse xsm:flex-col-reverse sm:flex-wrap xsm:flex-wrap">
                <Button
                  onClick={() => {
                    navigate("/bookademo");
                  }}
                  className="bg-[#fff] sm:w-[100%] xsm:w-[100%] rounded-full border border-[D0D5DD]"
                >
                  Book a demo
                </Button>
                <Button
                  onClick={() => {
                    navigate("/startforfree");
                  }}
                  className="bg-custom-gradient sm:w-[100%] xsm:w-[100%] text-[#fff] rounded-full ml-[10px] sm:ml-[0px] xsm:ml-[0px] sm:mb-[10px] xsm:mb-[10px]"
                >
                  Start for free
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAreAndWhatWeAre;

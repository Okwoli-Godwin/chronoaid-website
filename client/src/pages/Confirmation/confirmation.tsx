import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div>
        <div className="flex bg-[#F9FAFB] justify-center items-center py-[150px] sm:pt-[140px] xsm:pt-[140px]">
          <div className="w-[90%] flex justify-center items-center flex-col">
            <h1 className="w-[55%] md:w-[80%] sm:w-[80%] xsm:w-[80%] text-[38px] sm:text-[30px] xsm:text-[28px] font-[700] text-center">
              Thank you.
            </h1>
            <p className="text-sm xsm:text-[17px] w-[55%] sm:w-[90%] xsm:w-[90%] md:w-[80%] text-center mt-[20px] font-[400] text-[#475467]">
              Your request to learn more about ChronoAid Ai demo has been sent
              and a representative will reach out to the email address you
              provided within two business days.
            </p>
            <div className="flex sm:w-[100%] xsm:w-[100%] items-center mt-[30px] sm:flex-col-reverse xsm:flex-col-reverse sm:flex-wrap xsm:flex-wrap">
              <Button className="bg-[#fff] sm:w-[100%] xsm:w-[100%] rounded-full border border-[D0D5DD]">
                Go back
              </Button>
              <Button
                onClick={() => {
                  navigate("/");
                }}
                className="bg-custom-gradient sm:w-[100%] xsm:w-[100%] text-[#fff] rounded-full ml-[10px] sm:ml-[0px] xsm:ml-[0px] sm:mb-[10px] xsm:mb-[10px]"
              >
                Go home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Confirmation;

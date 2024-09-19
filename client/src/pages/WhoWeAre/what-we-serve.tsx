import imageA from "../../assets/Image-a.png";
import imageB from "../../assets/Image-b.png";
import imageC from "../../assets/Image-c.png";
import imageD from "../../assets/Image-d.png";
import ImageE from "../../assets/Image-e.png";
import imageF from "../../assets/Image-f.png";

const WhoWeServe = () => {
  return (
    <div>
      <section className="my-[4rem]">
        <div>
          <div className="flex flex-row items-center my-12 justify-between">
            <div className="flex-1 p-8">
              <div>
                <p className="text-greyDark text-[24px] font-semibold text-left leading-[38px] font-inter">
                  Specialty Care Providers
                </p>
                <p className="text-[15px] font-normal leading-[30px] text-greyPrimary py-2">
                  Serving cardiology, endocrinology, pulmonology, nephrology,
                  and oncology practices.
                </p>
                <p className="text-[15px] font-normal leading-[30px] text-greyPrimary">
                  ChronoAid AI supports specialty care providers by integrating
                  chronic disease management into daily practice, allowing
                  specialists to offer advanced care with real-time patient data
                  and proactive monitoring.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <img src={imageA} alt="" />
            </div>
          </div>
          <div className="flex flex-row items-center my-12 justify-between">
            <div className="flex-1">
              <img src={imageB} alt="" />
            </div>
            <div className="flex-1 p-8">
              <div>
                <p className="text-greyDark text-[24px] font-semibold text-left leading-[38px] font-inter">
                  Primary Care Providers
                </p>
                <p className="text-[15px] font-normal leading-[30px] text-greyPrimary py-2">
                  Enhancing patient engagement and chronic disease management
                  for family and primary care practices.
                </p>
                <p className="text-[15px] font-normal leading-[30px] text-greyPrimary">
                  We help primary care providers manage patients with chronic
                  conditions by offering continuous monitoring and seamless
                  integration with their existing systems, helping them deliver
                  more personalized, patient-centered care.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center my-12 justify-between">
            <div className="flex-1 p-8">
              <div>
                <p className="text-greyDark text-[24px] font-semibold text-left leading-[38px] font-inter">
                  Care Management Organizations
                </p>
                <p className="text-[15px] font-normal leading-[30px] text-greyPrimary py-2">
                  Supporting care teams in managing patients across multiple
                  practices and facilities.
                </p>
                <p className="text-[15px] font-normal leading-[30px] text-greyPrimary">
                  ChronoAid AI enables care management organizations to
                  effectively oversee patients with complex needs, providing
                  tools for decision-making, reporting, and ensuring compliance
                  across care settings.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <img src={imageC} alt="" />
            </div>
          </div>
          <div className="flex flex-row items-center my-12 justify-between">
            <div className="flex-1">
              <img src={imageD} alt="" />
            </div>
            <div className="flex-1 p-8">
              <div>
                <p className="text-greyDark text-[24px] font-semibold text-left leading-[38px] font-inter">
                  Home Care and Wellness Services
                </p>
                <p className="text-[15px] font-normal leading-[30px] text-greyPrimary py-2">
                  Coordinating seamless care for patients at home with real-time
                  data sharing and remote monitoring.
                </p>
                <p className="text-[15px] font-normal leading-[30px] text-greyPrimary">
                  Our platform helps home care agencies ensure smooth
                  coordination of care, offering secure messaging, real-time
                  data sharing, and active care plan management, leading to
                  better patient outcomes at home.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center my-12 justify-between">
            <div className="flex-1 p-8">
              <div>
                <p className="text-greyDark text-[24px] font-semibold text-left leading-[38px] font-inter">
                  Insurers
                </p>
                <p className="text-[15px] font-normal leading-[30px] text-greyPrimary py-2">
                  Providing predictive analytics for insurers to optimize
                  resources and manage healthcare costs.
                </p>
                <p className="text-[15px] font-normal leading-[30px] text-greyPrimary">
                  ChronoAid AI delivers risk analytics that help insurers assess
                  patient needs, manage care costs, and optimize coverage
                  strategies through data-driven insights, ensuring value-based
                  care.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <img src={ImageE} alt="" />
            </div>
          </div>
          <div className="flex flex-row items-center my-12 justify-between">
            <div className="flex-1">
              <img src={imageF} alt="" />
            </div>
            <div className="flex-1 p-8">
              <div>
                <p className="text-greyDark text-[24px] font-semibold text-left leading-[38px] font-inter">
                  Community Health Organizations
                </p>
                <p className="text-[15px] font-normal leading-[30px] text-greyPrimary py-2">
                  Empowering underserved communities with chronic disease
                  management tools.
                </p>
                <p className="text-[15px] font-normal leading-[30px] text-greyPrimary">
                  We collaborate with community health centers to improve
                  healthcare access for underserved populations, providing
                  educational tools and technology to address social
                  determinants of health and enable proactive care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeServe;
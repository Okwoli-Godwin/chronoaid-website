import farmer from "../../assets/farmer.png";
const Testimonial = () => {
  return (
    <div>
      <section className="px-16 py-[4rem]">
        <div >
          <p className="text-[16px] font-semibold text-center leading-[24px] text-bluePrimary">
            Testimonial
          </p>
          <p className="text-[30px] font-semibold text-center leading-[60px] tracking-[-0.02em] text-greyDark">
            Don’t just take our word for it
          </p>
        </div>
        <div className="flex flex-row mt-12 justify-center items-center">
          <div className="flex-1">
            <div>
              <p className="text-[30px] font-semibold leading-[60px] tracking-[-0.02em] text-greyDark">
                Optimizing Diabetes Care in Rural Nigeria
              </p>
            </div>
            <div className="mt-8">
              <p className="text-[16px] font-semibold text-left leading-[28px] font-inter">
                Challenge
              </p>
              <p className="text-[15px] font-normal leading-[30px] text-greyPrimary">
                Limited access to healthcare facilities and difficulty in
                monitoring blood sugar levels.
              </p>
            </div>
            <div>
              <p className="text-[16px] font-semibold text-left leading-[28px] font-inter text-greyDark">
                Solution
              </p>
              <p className="text-[15px] font-normal leading-[30px] text-greyPrimary">
                ChronoAid AI's remote monitoring and AI-powered alerts provide
                real-time updates to the local clinic, allowing healthcare
                workers to intervene promptly.
              </p>
            </div>
            <div>
              <p className="text-[16px] font-semibold text-left leading-[28px] font-inter text-greyDark">
                Outcome
              </p>
              <p className="text-[15px] font-normal leading-[30px] text-greyPrimary">
                Improved glycemic control and reduced hospital visits, resulting
                in enhanced quality of life and reduced healthcare costs.
              </p>
            </div>
            <div>
              <img src="" alt="" />
              <div>
                <p className="text-[18px] font-semibold text-left leading-[28px] font-inter text-greyDark">
                  Ahmed
                </p>
                <p className="text-[15px] font-normal leading-[30px] text-greyPrimary">
                  A 45-year-old farmer in rural Northern Nigeria with diabetes.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img src={farmer} alt="A Farmer" className="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;

import img from "../../assets/our-story-image-a.png";
import imgb from "../../assets/our-story-image-b.png";

const Story = () => {
  return (
    <div>
      <section className="px-16 my-[4rem]">
        <div>
          <p className="text-[16px] font-semibold text-left leading-[24px] text-bluePrimary">
            Our story
          </p>
        </div>
        <div className="flex flex-row justify-between ">
          <div className="flex-1 pr-4">
            <div className="text-[30px] font-semibold leading-[44px] tracking-[-0.02em] text-greyDark pb-3">
              <p>
                Chronic Diseases: A Growing Health Challenge in Nigeria and
                Africa
              </p>
            </div>
            <div>
              <p className="text-[15px] font-normal leading-[30px] text-greyPrimary">
                Chronic diseases like diabetes, hypertension, asthma, and heart
                failure have become an increasingly significant health burden
                across Nigeria and Africa. These conditions often require
                long-term care, consistent monitoring, and timely interventions.
                However, many Africans face barriers to accessing healthcare,
                whether due to geographical location, limited healthcare
                infrastructure, or high treatment costs. This is where we, at
                ChronoAid AI, step in.
              </p>
              <p className="text-[15px] font-normal leading-[30px] text-greyPrimary">
                Our goal is to revolutionize chronic disease management by
                leveraging Artificial Intelligence (AI) and the Internet of
                Medical Things (IoMT) to create a seamless, data-driven care
                ecosystem.
              </p>
            </div>
          </div>
          <div className="flex-1 pl-4">
            <img
              src={img}
              alt="An health practitioner checking a patient"
              className="h-auto w-full"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between my-12">
          <div className="flex-1 pr-4">
            <img
              src={imgb}
              alt="An health practitioner checking a patient"
              className="h-auto w-full"
            />
          </div>
          <div className="flex-1 pl-4">
            <div className="text-[30px] font-semibold leading-[44px] tracking-[-0.02em] text-greyDark pb-3">
              <p>
                Exploring Private Practice: A New Era for Healthcare
                Professionals
              </p>
            </div>
            <div>
              <p className="text-[15px] font-normal leading-[30px] text-greyPrimary">
                The healthcare landscape in Nigeria and Africa is changing
                rapidly. Many healthcare professionals dream of starting their
                private practice but are often held back by high setup costs,
                limited access to cutting-edge technology, and the complexities
                of managing chronic diseases. At ChronoAid AI, we believe that
                every clinician should have the opportunity to provide
                exceptional care and run a sustainable private practice.
              </p>
              <p className="text-[15px] font-normal leading-[30px] text-greyPrimary">
                By integrating Artificial Intelligence (AI) and the Internet of
                Medical Things (IoMT) into daily clinical workflows, we are
                opening doors for healthcare professionals to establish and grow
                their private practices efficiently. Let's delve into how
                ChronoAid AI is creating new opportunities for clinicians and
                helping them build successful practices tailored to the modern
                healthcare landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;

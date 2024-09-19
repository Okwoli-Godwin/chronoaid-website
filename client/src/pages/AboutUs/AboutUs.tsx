const AboutUs = () => {
  return (
    <div>
      {/* About Us */}
      <section className="mx-48 my-[4rem]">
        <div className="">
          <p className="text-[16px] font-semibold text-center leading-[24px] text-base-bluePrimary">
            About us
          </p>
          <p className="text-[48px] font-semibold text-center leading-[60px] tracking-[-0.02em] mt-[10px] text-base-greyDark">
            Innovating healthcare with AI-driven chronic <br /> disease
            management solutions.
          </p>
        </div>
        <div className="mt-[10px]">
          <p className="text-[20px] font-normal my-8 text-center leading-[30px] font-inter text-base-greyPrimary">
            ChronoAid AI is a product of HealthronXPharma (HXP) pioneering
            platform at the intersection of healthcare and technology. We
            specialize in remote patient monitoring, chronic care management,
            and clinical decision support, all seamlessly integrated into a
            single solution. Our leadership team includes experienced
            physicians, engineers, and business professionals dedicated to
            improving healthcare outcomes through innovation.
          </p>
          <p className="text-[20px] font-normal text-center my-8 leading-[30px] font-inter text-base-greyPrimary">
            By combining data-driven insights with predictive analytics,
            ChronoAid AI enables healthcare providers to close gaps in care,
            prevent readmissions, and optimize clinical workflows. Our mission
            is to transform chronic disease management across Africa, offering
            better care and better health outcomes for all.
          </p>
        </div>
      </section>

      {/* Our Solution */}
      <section className="px-16 my-[4rem]">
        <div className="text-left">
          <p className="text-[16px] font-semibold  leading-[24px] text-base-bluePrimary">
            Our Solution
          </p>
          <p className="text-[36px] font-semibold leading-[44px] tracking-[-0.02em] text-base-greyDark pb-3">
            We’re just getting started
          </p>
          <p className="text-[20px] font-normal leading-[30px] text-base-greyPrimary">
            Revolutionizing Chronic Disease Management and Care Coordination
            with AI
          </p>
        </div>
        <div className="flex justify-center flex-row mt-[2rem]">
          <div className="flex-1 text-[20px] font-normal leading-[30px] text-base-greyPrimary pr-4">
            <div>
              <p className="pb-4">
                ChronoAid AI is a comprehensive platform designed to
                revolutionize chronic disease management and care coordination
                through cutting-edge technology. Our solution leverages AI and
                IoMT (Internet of Medical Things) to deliver real-time insights
                and predictive analytics, empowering healthcare providers to
                offer proactive, personalized care. Key features include:
              </p>
            </div>
            <ul className="space-y-4">
              <li>
                {" "}
                • Chronic Care Management Streamline chronic disease monitoring
                and personalized care plans for improved patient outcomes.
              </li>
              <li>
                {" "}
                • Remote Patient Monitoring (RPM) + IoMT Integration Continuous
                real-time monitoring of vital signs through IoMT devices,
                allowing clinicians to track patient health remotely.{" "}
              </li>
              <li>
                • Principal Care Management Support for patients with complex
                chronic conditions requiring frequent follow-up and
                intervention.{" "}
              </li>
            </ul>
          </div>
          <div className="flex-1 text-[20px] font-normal leading-[30px] text-base-greyPrimary pl-4">
            <ul className="space-y-2">
              <li>
                • Transitional Care Management Facilitate smooth transitions for
                patients moving between care settings to prevent readmissions
                and complications.
              </li>
              <li>
                • Chronic Disease Clinical Decision Support Advanced decision
                support tools help clinicians provide evidence-based care
                tailored to individual patient needs.{" "}
              </li>
              <li>
                • Home Care/Wellness Visits Schedule and manage personalized
                in-home care services, ensuring continued care outside of
                clinical settings.{" "}
              </li>
              <li>
                • Risk Analysis for Chronic Diseases (Insurers) Provide insurers
                with data-driven insights to assess patient risks and optimize
                coverage strategies.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="px-16 my-[4rem]">
        <div className="flex flex-row justify-center ">
          <div className="flex-1">
            <div className="text-[36px] font-semibold leading-[44px] tracking-[-0.02em] text-base-greyDark pb-3">
              <p>
                Chronic Diseases: A Growing Health Challenge in Nigeria and
                Africa
              </p>
            </div>
            <div>
              <p>
                Chronic diseases like diabetes, hypertension, asthma, and heart
                failure have become an increasingly significant health burden
                across Nigeria and Africa. These conditions often require
                long-term care, consistent monitoring, and timely interventions.
                However, many Africans face barriers to accessing healthcare,
                whether due to geographical location, limited healthcare
                infrastructure, or high treatment costs. This is where we, at
                ChronoAid AI, step in.
              </p>
              <p>
                Our goal is to revolutionize chronic disease management by
                leveraging Artificial Intelligence (AI) and the Internet of
                Medical Things (IoMT) to create a seamless, data-driven care
                ecosystem.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <img alt="image coming soon"></img>
          </div>
        </div>
        <div className="flex flex-row justify-center ">
          <div className="flex-1">
            <img alt="image coming soon"></img>
          </div>
          <div className="flex-1">
            <div className="text-[36px] font-semibold leading-[44px] tracking-[-0.02em] text-base-greyDark pb-3">
              <p>
                Exploring Private Practice: A New Era for Healthcare
                Professionals
              </p>
            </div>
            <div>
              <p>
                The healthcare landscape in Nigeria and Africa is changing
                rapidly. Many healthcare professionals dream of starting their
                private practice but are often held back by high setup costs,
                limited access to cutting-edge technology, and the complexities
                of managing chronic diseases. At ChronoAid AI, we believe that
                every clinician should have the opportunity to provide
                exceptional care and run a sustainable private practice.
              </p>
              <p>
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

export default AboutUs;

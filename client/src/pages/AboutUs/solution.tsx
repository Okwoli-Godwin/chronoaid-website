const Solution = () => {
  return (
    <div>
      <section className="px-16 my-[100px]">
        <div className="text-left">
          <p className="text-[16px] font-semibold  leading-[24px] text-bluePrimary">
            Our Solution
          </p>
          <p className="text-[30px] font-semibold leading-[44px] tracking-[-0.02em] text-greyDark pb-3">
            We’re just getting started
          </p>
          <p className="text-[15px] font-normal leading-[30px] text-greyPrimary">
            Revolutionizing Chronic Disease Management and Care Coordination
            with AI
          </p>
        </div>
        <div className="flex justify-center flex-row mt-[1rem]">
          <div className="flex-1 text-[15px] font-normal leading-[30px] text-greyPrimary pr-4">
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
          <div className="flex-1 text-[15px] font-normal leading-[30px] text-greyPrimary pl-4">
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
    </div>
  );
};

export default Solution;

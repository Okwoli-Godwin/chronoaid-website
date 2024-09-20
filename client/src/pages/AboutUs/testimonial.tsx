import React, { useState } from "react";
import { testimonials } from "./data";
import arrowBack from "../../assets/arrowback.png";
import arrowFront from "../../assets/arrowfront.png";

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const {
    title,
    challenge,
    solution,
    outcome,
    patientName,
    patientProfile,
    image,
  } = testimonials[currentIndex];

  return (
    <div>
      <section className="px-16 py-[4rem]">
        <div>
          <p className="text-[16px] font-semibold text-center leading-[24px] text-bluePrimary">
            Testimonial
          </p>
          <p className="text-[30px] font-semibold text-center leading-[60px] tracking-[-0.02em] text-greyDark">
            Don’t just take our word for it
          </p>
        </div>
        <div className="flex flex-row mt-12 justify-center items-center">
          <div className="flex-1">
            <div className="h-[30rem]">
              <div>
                <p className="text-[30px] font-semibold tracking-[-0.02em] text-greyDark">
                  {title}
                </p>
              </div>
              <div className="mt-8">
                <p className="text-[16px] font-semibold text-left leading-[28px] font-inter">
                  Challenge
                </p>
                <p className="text-[15px] font-normal leading-[30px] text-greyPrimary">
                  {challenge}
                </p>
              </div>
              <div className="mt-4">
                <p className="text-[16px] font-semibold text-left leading-[28px] font-inter text-greyDark">
                  Solution
                </p>
                <p className="text-[15px] font-normal leading-[30px] text-greyPrimary">
                  {solution}
                </p>
              </div>
              <div className="mt-4">
                <p className="text-[16px] font-semibold text-left leading-[28px] font-inter text-greyDark">
                  Outcome
                </p>
                <p className="text-[15px] font-normal leading-[30px] text-greyPrimary">
                  {outcome}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <div className="w-[60%]">
                <p className="text-[18px] font-semibold text-left leading-[28px] font-inter text-greyDark">
                  {patientName}
                </p>
                <p className="text-[15px] font-normal leading-[30px] text-greyPrimary">
                  {patientProfile}
                </p>
              </div>
              <div onClick={handlePrev}>
                <img src={arrowBack} className="mr-4" />
              </div>
              <div onClick={handleNext}>
                <img src={arrowFront} className="mr-4" />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img src={image} alt={patientName} className="mr-4" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSlider;

import { TeamCard } from "./team-card";
import linkedln from "../../assets/linkedln.png";
import twitter from "../../assets/twitter.png"
import jummie from "../../assets/jummie.png"
import sunny from "../../assets/sunny.png"
import daniel from "../../assets/daniel.png"
import defaultImage from "../../assets/default.png"

const About = () => {
  return (
    <div>
      <section className="px-16 py-[4rem] bg-[#F9FAFB]">
        <div>
          <p className="text-[16px] font-semibold text-center leading-[24px] text-bluePrimary">
            Our Team
          </p>
          <p className="text-[30px] font-semibold text-center leading-[60px] tracking-[-0.02em] text-greyDark">
            Leadership team
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="">
            <p className="text-[15px] font-normal leading-[30px] text-greyPrimary">
              We’re a cross-disciplinary team that <br /> loves to create great
              experiences for <br /> our customers.
            </p>
          </div>
          <div className="xl:grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
            <TeamCard
              imageUrl={defaultImage}
              name={"Dr. Williams Emmanuel Adeyeye"}
              jobTitle={"Founder & CEO"}
              linkedln={linkedln}
              twitter={twitter}
            />
            <TeamCard
              imageUrl={sunny}
              name={"Sunday Pius Ojwo"}
              jobTitle={"Software Engineer & Data Scientist"}
              linkedln={linkedln}
              twitter={twitter}
            />
            <TeamCard
              imageUrl={jummie}
              name={"Ipoola Olajumoke Elizabeth"}
              jobTitle={"Frontend Developer"}
              linkedln={linkedln}
              twitter={twitter}
            />
            <TeamCard
              imageUrl={defaultImage}
              name={"Okwoli Godwin Savio "}
              jobTitle={"Full Stack Developer"}
              linkedln={linkedln}
              twitter={twitter}
            />
            <TeamCard
              imageUrl={daniel}
              name={"Daniel Adeboye"}
              jobTitle={"Machine Learning Engineer, Kaggle Expert"}
              linkedln={linkedln}
              twitter={twitter}
            />
            <TeamCard
              imageUrl={defaultImage}
              name={"Nathanael Jonathan"}
              jobTitle={"Product Designer"}
              linkedln={linkedln}
              twitter={twitter}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

interface ProjectCardProps {
  imageUrl: string;
  name: string;
  jobTitle: string;
  linkedln: string;
  twitter: string;
}

export const TeamCard = (props: ProjectCardProps) => {
  return (
    <div className="w-[300px] p-4">
      <div className="">
        <img className="" src={props.imageUrl} alt={props.name} />
      </div>
      <div className="">
        <div>
          <p className="text-[15px] font-semibold text-left leading-[28px] font-inter">
            {props.name}
          </p>
          <p className="text-[14px] font-normal text-left leading-[24px] font-inter  text-bluePrimary">
            {props.jobTitle}
          </p>
          <div className="socials flex flex-row">
            <img className="m-2" src={props.linkedln} alt="linkedln icon" />
            <img className="m-2" src={props.twitter} alt="twitter icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

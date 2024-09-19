export const ProjectCard = (props: any) => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <img className="" src={props.imageurl} alt="team member's image" />
        </div>
        <div className="">
          <div>
            <p className="">{props.name}</p>
            <p className="">{props.jobTitle}</p>
            <p className="">{props.jobDescription}</p>
            <div className="socials">
              <p>Tools/stacks: </p>
              <p>{props.stacks}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import Skill from "./Skill";

const SkillList = ({ list, reset }) => {
  return (
    <div className="w-full bg-gray-300">
      {list.map((tech) => {
        return <Skill key={tech.name} name={tech.name} icon={tech.icon} reset={reset} />;
      })}
    </div>
  );
};

export default SkillList;

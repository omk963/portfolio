import { useState } from "react";
import { technologies, languages } from "../../index";
import SkillList from "./SkillList";

const Skills = () => {
  const [skills, setSkills] = useState(true);
  const [reset, setReset] = useState(false);

  const toggleSkillsLang = () => {
    setSkills(false);
  };

  const toggleSkillsProg = () => {
    setSkills(true);
  };

  // TODO: simplify it 
  const handleReset = () => {
    if (!reset) {
      setReset(true)
    }
    else {
      setReset(false)
      handleReset
    }
  };

  return (
    <div className={`mx-auto lg:w-3/6 block text-center bg-gradient-to-b ${skills ? 'from-slate-100 from-0% to-goshawk to-[2%]' : 'from-slate-100 from-[0%] to-goshawk to-[4%]'}  p-2 border-2 border-gray-500 rounded-lg shadow-inner w-5/6`}>
      <span className="text-orange-400">SKILLS</span>
      <div className="flex flex-col w-full bg-gray-300 rounded-md">
        {/* The two tabs */}
        <div className="flex flex-row mx-1 mt-1 bg-gray-300 justify-evenly">
          <button
            onClick={toggleSkillsProg}
            className={`w-full rounded-t-md ${skills ? "bg-orange-400" : "bg-gray-400"
              }`}
          >
            {`<Languages />`}
          </button>
          <button
            onClick={toggleSkillsLang}
            className={`w-full rounded-t-md ${!skills ? "bg-orange-400" : "bg-gray-400"
              }`}
          >
            Languages
          </button>
        </div>
        <hr className="w-full h-1 bg-orange-400 border-y border-y-gray-100" />
        <div>
          {skills && (
            <div>
              <SkillList list={technologies} reset={reset} />
            </div>
          )}
          {!skills && (
            <div>
              <SkillList list={languages} reset={reset} />
            </div>
          )}
        </div>
        <hr className="w-full pb-2 border-none" />
        <div className="flex flex-row items-center justify-between border-t-2 border-gray-500 shadow-2xl topShadow">
          <button onClick={handleReset} className="px-2 ml-4 text-lg text-white bg-green-500 rounded-md shadow-inner h-2/5 active:bg-green-600 active:shadow-black shadow-gray-400">
            <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">reset</span>
          </button>
          <div className="flex flex-row items-center mr-4">
            <span className="mr-2 text-2xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              SKILL POINT
            </span>
            <div className="flex items-center px-2 text-3xl bg-white border-2 border-gray-500 h-7">
              &#8734;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

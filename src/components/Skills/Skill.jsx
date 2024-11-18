import { useEffect, useState } from "react";
import { ArrowUp } from 'lucide-react';

const Skill = ({ name, icon, reset }) => {
    const [count, setCount] = useState(0);

    const handleArrow = () => {
        setCount(prev => prev + 1);
    };

    useEffect(() => {
        setCount(0);
    }, [reset])

    return (
        <div className="skillsSm">
            <img src={icon} alt={name} className="object-contain w-16 h-16 m-auto bg-gray-100 border-2 rounded-lg" />
            <div className="skillBox">
                <p className="ml-2 text-left">{name}</p>
                <div className="flex flex-row items-center justify-between border-t-2 border-gray-400">
                    <p className="ml-2">{count}</p>
                    <button onClick={handleArrow} className="h-6 mr-2 bg-green-300 rounded-md active:bg-green-500">
                        <ArrowUp />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Skill;